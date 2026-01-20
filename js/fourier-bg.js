/**
 * Fourier 3D Background Engine (Pure JS version)
 * Extracted from Fourier Project for Portfolio Background
 */

// --- DFT Logic ---
function dft(x) {
  const X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    let re = 0, im = 0;
    for (let n = 0; n < N; n++) {
      const phi = (2 * Math.PI * k * n) / N;
      re += x[n].re * Math.cos(phi) + x[n].im * Math.sin(phi);
      im += -x[n].re * Math.sin(phi) + x[n].im * Math.cos(phi);
    }
    re = re / N; im = im / N;
    X[k] = { re, im, freq: k, amp: Math.sqrt(re * re + im * im), phase: Math.atan2(im, re) };
  }
  return X;
}

// --- Background Engine ---
class FourierBackground {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.instances = [];
    this.settings = {
      speed: 0.2,
      persistence: 2.0,
      pathWeight: 1.5,
      zoom: 120,
      spread: 800,
      rotationSpeed: 0.4
    };
    
    this.initScene();
    this.initListeners();
    this.animate();
    
    // Initial instances
    const types = ['lissajous', 'knot', 'torusknot25', 'helix', 'butterfly', 'spherical'];
    for(let i=0; i<16; i++) {
        this.addInstance(types[Math.floor(Math.random() * types.length)]);
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x020205);
    
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = this.settings.zoom;
    
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
    
    this.scene.add(new THREE.AmbientLight(0x404040, 3));
    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(500, 500, 500);
    this.scene.add(light);
    
    this.rotationAxis = new THREE.Vector3(Math.random()-0.5, Math.random()-0.5, 0).normalize();
    this.accumulatedAngle = 0;
  }

  // --- Generators ---
  generateTrefoilKnot(N=256, scale=150) {
    const points = [];
    for(let i=0; i<N; i++) {
      const t = (i/N)*Math.PI*2;
      const x = (Math.sin(t)+2*Math.sin(2*t))/3;
      const y = (Math.cos(t)-2*Math.cos(2*t))/3;
      const z = (-Math.sin(3*t))/3;
      points.push(new THREE.Vector3(x*scale, y*scale, z*scale));
    }
    return points;
  }

  generateHelix(N=256, scale=150) {
    const points = [];
    for(let i=0; i<N; i++) {
      const t = (i/N)*Math.PI*2*4;
      points.push(new THREE.Vector3(scale*0.5*Math.cos(t), scale*0.5*Math.sin(t), scale*(i/N-0.5)));
    }
    return points;
  }

  addInstance(type) {
    const scale = 150;
    let seedPoints = [];
    if(type === 'knot') seedPoints = this.generateTrefoilKnot(256, scale);
    else if(type === 'helix') seedPoints = this.generateHelix(256, scale);
    else seedPoints = this.generateTrefoilKnot(256, scale); // 템플릿용 단순화

    const fX = dft(seedPoints.map(p=>({re:p.x, im:0}))).sort((a,b)=>b.amp-a.amp);
    const fY = dft(seedPoints.map(p=>({re:p.y, im:0}))).sort((a,b)=>b.amp-a.amp);
    const fZ = dft(seedPoints.map(p=>({re:p.z, im:0}))).sort((a,b)=>b.amp-a.amp);

    const hue = Math.random() * 360;
    const color = new THREE.Color(`hsl(${hue}, 100%, 65%)`);
    const trailGeom = new THREE.BufferGeometry();
    trailGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(5000*3), 3));
    const trailMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 });
    const trailLine = new THREE.Line(trailGeom, trailMat);
    this.scene.add(trailLine);

    const spread = this.settings.spread;
    this.instances.push({
      fX, fY, fZ, time: Math.random()*Math.PI*2, trail: [],
      center: { x:(Math.random()-0.5)*spread, y:(Math.random()-0.5)*spread, z:(Math.random()-0.5)*spread },
      objects: { trailLine, trailGeom, trailMat }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const s = this.settings;
    
    this.instances.forEach(inst => {
      const dt = (Math.PI*2/inst.fX.length) * s.speed;
      inst.time = (inst.time + dt) % (Math.PI*2);
      
      let x=0, y=0, z=0;
      for(let i=0; i<inst.fX.length; i++) {
        x += inst.fX[i].amp * Math.cos(inst.fX[i].freq * inst.time + inst.fX[i].phase);
        y += inst.fY[i].amp * Math.cos(inst.fY[i].freq * inst.time + inst.fY[i].phase);
        z += inst.fZ[i].amp * Math.cos(inst.fZ[i].freq * inst.time + inst.fZ[i].phase);
      }
      
      const pos = new THREE.Vector3(x + inst.center.x, y + inst.center.y, z + inst.center.z);
      inst.trail.push(pos);
      if(inst.trail.length > inst.fX.length * s.persistence) inst.trail.shift();
      
      const positions = inst.objects.trailGeom.attributes.position.array;
      inst.trail.forEach((p, i) => {
        positions[i*3]=p.x; positions[i*3+1]=p.y; positions[i*3+2]=p.z;
      });
      inst.objects.trailLine.geometry.setDrawRange(0, inst.trail.length);
      inst.objects.trailLine.geometry.attributes.position.needsUpdate = true;
    });

    if(s.rotationSpeed !== 0) {
      this.camera.rotateOnAxis(this.rotationAxis, 0.005 * s.rotationSpeed);
    }
    this.renderer.render(this.scene, this.camera);
  }

  initListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FourierBackground('canvas-bg');
});
