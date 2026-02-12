
export const renderHero = () => {
  const heroHtml = `
      <section
        id="hero"
        class="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
      >
        <div class="text-center space-y-8 relative z-10">
          <div
            class="inline-block px-6 py-2 glass rounded-full text-xs font-space tracking-widest text-cyan-400 uppercase border border-cyan-400/30"
          >
            Next-Gen AI & Mathematical Visualization
          </div>
          <h1
            id="hero-title"
            class="text-6xl md:text-8xl font-space font-bold tracking-tighter leading-none"
          >
            ENGINEERING<br /><span
              class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase"
              >Perception</span
            >
          </h1>
          <p
            class="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed"
          >
            Where mathematical intuition meets cutting-edge AI. <br />
            Navigate through a next-gen portfolio bridging <br />
            <span class="text-cyan-300 font-bold">Complex Algorithms</span> and
            <span class="text-purple-300 font-bold">Creative Play</span>.
          </p>
          <div
            class="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#ai-lab"
              class="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-space font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 rounded-lg"
            >
              Explore AI Lab
            </a>
            <a
              href="#creative-lab"
              class="px-10 py-5 bg-transparent border border-white/20 text-white font-space font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white/5 hover:border-white/50 rounded-lg"
            >
              Creative Sandbox
            </a>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce"
        >
          <span
            class="text-[10px] font-space tracking-[0.3em] text-white/40 uppercase"
            >Scroll to decode</span
          >
          <svg
            class="w-6 h-6 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>
  `;

  document.querySelector("main").insertAdjacentHTML("afterbegin", heroHtml);
};
