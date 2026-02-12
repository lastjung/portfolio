
export const renderContact = () => {
    const contactHtml = `
      <!-- Contact Section -->
      <section
        id="contact"
        class="py-32 px-8 min-h-[50vh] flex flex-col justify-center items-center text-center bg-gradient-to-t from-cyan-950/30 to-transparent"
      >
        <h2
          class="text-5xl md:text-7xl font-space font-black mb-12 tracking-tighter uppercase"
        >
          Beyond<br />The Limits.
        </h2>
        <p
          class="max-w-2xl mx-auto text-white/50 mb-16 text-base leading-relaxed tracking-wider font-light"
        >
          Reading world patterns through AI and data, creating new value at the
          interface of art and technology.<br />
          Always welcome for collaboration or project inquiries.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:contact@lastjung.io"
            class="px-12 py-5 bg-white text-black font-black font-space tracking-widest text-[10px] rounded-full transition-all hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            SEND AN ENQUIRY
          </a>
          <a
            href="https://github.com/lastjung"
            target="_blank"
            class="px-12 py-5 glass border-white/20 hover:border-white/80 text-white font-bold font-space tracking-widest text-[10px] rounded-full transition-all hover:scale-105 active:scale-95 uppercase"
          >
            GitHub Profile
          </a>
        </div>
      </section>
    `;

    document.querySelector("main").insertAdjacentHTML("beforeend", contactHtml);
};
