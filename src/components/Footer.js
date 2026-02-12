
export const renderFooter = () => {
    const footerHtml = `
    <!-- Footer -->
    <footer
      class="py-20 px-8 border-t border-white/5 text-[9px] font-space tracking-[0.5em] text-white/20 uppercase flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 bg-black/50"
    >
      <div>
        <a href="summary.html" class="hover:text-white/40 transition-colors"
          >©</a
        >
        2026 LASTJUNG . ENGINEERING
      </div>
      <div class="flex gap-12">
        <a
          href="https://github.com/lastjung"
          target="_blank"
          class="hover:text-cyan-400 transition-colors cursor-pointer"
          >Github</a
        >
        <a
          href="https://lastjung.github.io/openai_experience/"
          target="_blank"
          class="hover:text-purple-400 transition-colors cursor-pointer"
          >Experience</a
        >
        <a href="#" class="hover:text-red-400 transition-colors cursor-pointer"
          >YouTube</a
        >
        <a
          href="#"
          class="hover:text-indigo-400 transition-colors cursor-pointer"
          >LinkedIn</a
        >
      </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHtml);
};
