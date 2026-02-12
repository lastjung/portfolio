
export const renderYouTube = () => {
    const youtubeHtml = `
      <section
        id="youtube"
        class="py-32 px-8 min-h-screen flex justify-center items-center bg-gradient-to-b from-transparent to-red-950/30"
      >
        <div class="max-w-6xl w-full text-center space-y-24">
          <div class="space-y-4">
            <span
              class="text-red-500 font-bold text-xs tracking-[0.5em] uppercase"
              >Visonary Media</span
            >
            <h2
              class="text-5xl md:text-8xl font-space font-black uppercase tracking-tighter"
            >
              TRANS-LITE<br /><span
                class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                >EXPERIENCE</span
              >
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              class="break-inside-avoid group relative glass p-12 rounded-[2.5rem] space-y-10 hover:border-red-500/40 transition-all duration-500 border border-white/10 cursor-pointer"
              onclick="
                window.open('https://www.youtube.com/@TechPulse-w8z', '_blank')
              "
            >
              <div
                class="w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform"
              >
                <svg
                  class="w-12 h-12 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 .61-.03 1.3-.1 2.1-.06.8-.15 1.43-.28 1.9-.13.47-.35.84-.66 1.12-.31.28-.71.48-1.19.6-.48.12-1.17.21-2.07.27C16.64 18.06 14.88 18 12.33 18l-1.33.01c-2.55 0-4.31-.06-5.3-.12-1-.06-1.69-.15-2.07-.27-.48-.12-.88-.32-1.19-.6a2.8 2.8 0 01-.66-1.12c-.13-.47-.22-1.1-.28-1.9a32.32 32.32 0 01-.1-2.1L1.4 12c0-.61.03-1.3.1-2.1l.28-1.9c.13-.47.35-.84.66-1.12.31-.28.71-.48 1.19-.6.48-.12 1.17-.21 2.07-.27C6.69 5.94 8.41 6 10.96 6l1.33-.01c2.55 0 4.31.06 5.3.12 1 .06 1.69.15 2.07.27.48.12.88.32 1.19.6.31.28.53.65.66 1.12z"
                  />
                </svg>
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl font-space font-bold uppercase">
                  TechPulse
                </h3>
                <p class="text-white/40 text-sm leading-relaxed font-light">
                  <span class="text-white font-bold opacity-100"
                    >"Visualize the Unseen"</span
                  ><br />
                  Insights into math, coding, and future tech. Bridging theory
                  and implementation through high-quality motion graphics and
                  code.
                </p>
              </div>
              <div class="pt-6">
                <span
                  class="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] font-bold uppercase rounded-full tracking-[0.3em] group-hover:bg-red-500 group-hover:text-white transition-all"
                  >Visit Channel ↗</span
                >
              </div>
            </div>

            <div
              class="break-inside-avoid break-inside-avoid group relative glass p-12 rounded-[2.5rem] space-y-10 hover:border-orange-500/40 transition-all duration-500 border border-white/10"
            >
              <div
                class="w-24 h-24 bg-orange-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:-rotate-12 transition-transform"
              >
                <svg
                  class="w-12 h-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl font-space font-bold">ENTER LITE</h3>
                <p class="text-white/40 text-sm leading-relaxed font-light">
                  <span class="text-white font-bold opacity-100"
                    >"Code meets Fun"</span
                  ><br />
                  Exploring the joy of technology through experimental content
                  and vlogs combining tech trends and everyday fun.
                </p>
              </div>
              <div class="pt-6">
                <span
                  class="px-6 py-2 bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase rounded-full tracking-[0.3em]"
                  >Under Construction</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    document.querySelector("main").insertAdjacentHTML("beforeend", youtubeHtml);
};
