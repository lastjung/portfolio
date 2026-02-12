
const navLinks = [
  { href: "#hero", label: "Home", mobile: false },
  {
    href: "#ai-lab",
    label: "AI Lab",
    mobile: true,
    mobileLabel: "AI",
    color: "cyan",
  },
  {
    href: "#creative-lab",
    label: "Creative",
    mobile: true,
    mobileLabel: "Art",
    color: "purple",
  },
  {
    href: "#math-data",
    label: "Math",
    mobile: true,
    mobileLabel: "Math",
    color: "indigo",
  },
  {
    href: "#gaming",
    label: "Gaming",
    mobile: true,
    mobileLabel: "Game",
    color: "green",
  },
  { href: "#youtube", label: "YouTube", mobile: false },
  {
    href: "#contact",
    label: "Contact",
    mobile: true,
    mobileLabel: "Log",
    color: "white",
  },
];

export const renderNavigation = () => {
    const desktopLinksHtml = navLinks.map(link => `
        <li class="hover:text-cyan-400 transition-colors cursor-pointer">
            <a href="${link.href}">${link.label}</a>
        </li>
    `).join('');

    const mobileLinksHtml = navLinks.filter(link => link.mobile).map(link => `
        <a href="${link.href}" class="flex flex-col items-center gap-1 group">
            <div class="w-1.5 h-1.5 rounded-full bg-${link.color}-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span class="text-[8px] font-space font-bold uppercase tracking-widest text-white/50 group-hover:text-${link.color}-400 transition-colors">${link.mobileLabel}</span>
        </a>
    `).join('');

    const navHtml = `
        <nav class="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div class="font-space text-xl font-bold tracking-tighter hover:text-cyan-400 transition-colors cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                ENGINEERING<span class="text-cyan-400">.PORTFOLIO</span>
            </div>
            <ul class="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                ${desktopLinksHtml}
            </ul>
        </nav>
        
        <div id="bottom-nav" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] glass rounded-full px-6 py-3 flex gap-8 items-center md:hidden shadow-2xl border border-white/20 transition-all duration-500 translate-y-20 opacity-0">
            ${mobileLinksHtml}
        </div>
    `;

    // Insert after the background canvas
    const canvasBg = document.getElementById('canvas-bg');
    if (canvasBg) {
        canvasBg.insertAdjacentHTML('afterend', navHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHtml);
    }
};

export const initNavigationLogic = () => {
  // Navigation backdrop change on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
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
};
