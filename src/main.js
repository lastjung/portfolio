import {
  renderCreativeLab,
  renderMathData,
  renderGaming,
  renderAILab,
} from "./components/ProjectRenderer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderAILab();
  renderCreativeLab();
  renderMathData();
  renderGaming();

  // Re-run observer for newly added elements
  document
    .querySelectorAll("section, .project-card, footer")
    .forEach((el) => {
      // Only add if not already observed/added
      if (
        !el.classList.contains("opacity-0") &&
        !el.classList.contains("opacity-100")
      ) {
        el.classList.add(
          "transition-all",
          "duration-1000",
          "ease-out",
          "opacity-0",
          "translate-y-10",
        );
        sectionObserver.observe(el);
      }
    });

    // Original observer logic
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });
});

// Reveal on Scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);


// Navigation backdrop change on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-black/80", "py-4");
    nav.classList.remove("bg-black/50", "py-6");
  } else {
    nav.classList.remove("bg-black/80", "py-4");
    nav.classList.add("bg-black/50", "py-6");
  }
});

// Mobile Bottom Nav Visibility
const bottomNav = document.getElementById("bottom-nav");
if (bottomNav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      bottomNav.classList.remove("translate-y-20", "opacity-0");
      bottomNav.classList.add("translate-y-0", "opacity-100");
    } else {
      bottomNav.classList.add("translate-y-20", "opacity-0");
      bottomNav.classList.remove("translate-y-0", "opacity-100");
    }
  });
}

// Kinetic Typography: Independent character animation with preserved gradients
const heroTitle = document.getElementById("hero-title");

const splitTextIntoSpans = (el) => {
  const nodes = Array.from(el.childNodes);
  el.innerHTML = "";

  nodes.forEach((node) => {
    if (node.nodeType === 3) {
      // Text Node
      const text = node.textContent;
      text.split("").forEach((char) => {
        if (char.trim() === "") {
          el.appendChild(document.createTextNode(char));
        } else {
          const span = document.createElement("span");
          span.className = "kinetic-char inline-block";
          span.style.transition =
            "transform 0.1s cubic-bezier(0.1, 0.4, 0.2, 1)";
          span.textContent = char;
          el.appendChild(span);
        }
      });
    } else if (node.nodeType === 1) {
      // Element Node
      if (node.tagName === "BR") el.appendChild(node);
      else {
        const wrapper = node.cloneNode(false);
        const isGradient =
          wrapper.classList.contains("bg-clip-text") ||
          wrapper.classList.contains("text-transparent");

        if (isGradient) {
          wrapper.className = "";
          wrapper.style.display = "contents";
        }

        const textContent = node.textContent;
        textContent.split("").forEach((char, i) => {
          if (char.trim() === "") {
            wrapper.appendChild(document.createTextNode(char));
          } else {
            const span = document.createElement("span");
            span.className = "kinetic-char inline-block";
            span.style.transition =
              "transform 0.1s cubic-bezier(0.1, 0.4, 0.2, 1)";

            if (isGradient) {
              span.className += " font-bold";
              span.style.backgroundImage =
                "linear-gradient(to right, #22d3ee, #6366f1, #9333ea)";
              span.style.webkitBackgroundClip = "text";
              span.style.backgroundClip = "text";
              span.style.webkitTextFillColor = "transparent";
              span.style.color = "transparent";

              const totalChars = textContent.length;
              span.style.backgroundSize = `${totalChars * 100}% 100%`;
              span.style.backgroundPosition = `${(i / Math.max(1, totalChars - 1)) * 100}% 0`;
            }
            span.textContent = char;
            wrapper.appendChild(span);
          }
        });
        el.appendChild(wrapper);
      }
    }
  });
};

if (heroTitle) splitTextIntoSpans(heroTitle);

const chars = document.querySelectorAll(".kinetic-char");
let currentTargetSkew = 0;
let skews = Array.from({ length: chars.length }).fill(0);
let lastY = window.scrollY;

window.addEventListener(
  "scroll",
  () => {
    const nowY = window.scrollY;
    const diff = nowY - lastY;
    currentTargetSkew = Math.max(-60, Math.min(60, diff * 6.0));
    lastY = nowY;
  },
  { passive: true },
);

const animate = () => {
  chars.forEach((char, i) => {
    const speed = 0.08 + (i % 8) * 0.02;
    skews[i] += (currentTargetSkew - skews[i]) * speed;

    if (Math.abs(skews[i]) > 0.05) {
      char.style.transform = `skewY(${skews[i]}deg)`;
    } else {
      char.style.transform = "";
    }
  });
  currentTargetSkew *= 0.9;
  requestAnimationFrame(animate);
};

if (chars.length > 0) animate();

// [DESIGN UPGRADE] Mouse Spotlight Effect
const spotlight = document.createElement("div");
spotlight.className =
  "fixed inset-0 pointer-events-none z-0 transition-opacity duration-500";
spotlight.style.background =
  "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(34, 211, 238, 0.07), transparent 40%)";
document.body.appendChild(spotlight);

window.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--x", `${e.clientX}px`);
  spotlight.style.setProperty("--y", `${e.clientY}px`);
});

// [DESIGN UPGRADE] Scroll Indicator Animation
const scrollLine = document.querySelector(".w-px.h-16");
if (scrollLine) {
  scrollLine.animate(
    [
      { height: "0%", opacity: 0 },
      { height: "100%", opacity: 1 },
      { height: "0%", opacity: 0, offset: 0.9 }, // Quick fade out for loop
    ],
    {
      duration: 2000,
      iterations: Infinity,
      easing: "cubic-bezier(0.45, 0, 0.55, 1)",
    },
  );
}

// [DESIGN UPGRADE] Section Reveal Animation
const revealObserverOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");
      sectionObserver.unobserve(entry.target); // Reveal only once
    }
  });
}, revealObserverOptions);

// Apply reveal classes to sections and key elements

