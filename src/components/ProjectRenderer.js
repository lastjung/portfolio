
import { projects } from "../data/projects.js";

// Helper function to render tags
const renderTags = (tags, themeColor) => {
  // Map theme name to Tailwind color classes (simplified)
  // In a real scenario, you might want a more robust mapping or pass classes directly.
  return tags
    .map(
      (tag) =>
        `<span class="text-[9px] text-white/50 uppercase tracking-widest font-bold font-space">${tag}</span>`,
    )
    .join('<span class="w-1 h-1 rounded-full bg-white/20"></span>');
};

// Helper to render visual element based on type
const renderVisual = (visual) => {
  if (visual.type === "bar") {
    const colorMap = {
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      cyan: "bg-cyan-500",
      green: "bg-green-500",
      blue: "bg-blue-500",
      indigo: "bg-indigo-400",
      white: "bg-white/40",
    };
    return `<div class="w-12 h-1.5 ${colorMap[visual.color] || "bg-white"} rounded-full"></div>`;
  }
  return ""; // Default fallback
};

export const renderCreativeLab = () => {
  const container = document.querySelector("#creative-lab .grid");
  if (!container) return;

  const creativeProjects = projects.filter((p) => p.category === "creative");

  container.innerHTML = creativeProjects
    .map((project) => {
      const colorMap = {
        purple: "hover:border-purple-500/50",
        pink: "hover:border-pink-500/50",
        cyan: "hover:border-cyan-500/50",
        green: "hover:border-green-500/50",
        blue: "hover:border-blue-500/50",
        indigo: "hover:border-indigo-400/50",
        white: "hover:border-white/50",
      };
      const textHoverMap = {
        purple: "group-hover:text-purple-400",
        pink: "group-hover:text-pink-400",
        cyan: "group-hover:text-cyan-400",
        green: "group-hover:text-green-400",
        blue: "group-hover:text-blue-400",
        indigo: "group-hover:text-indigo-400",
        white: "group-hover:text-white",
      };
      const dotColorMap = {
        purple: "bg-purple-500",
        pink: "bg-pink-500",
        cyan: "bg-cyan-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        indigo: "bg-indigo-400",
        white: "bg-white/40",
      };

      return `
      <div
        class="bg-white/[0.03] p-8 rounded-2xl border border-white/10 ${colorMap[project.theme]} hover:bg-white/[0.07] transition-all group flex flex-col justify-between h-72 cursor-pointer relative overflow-hidden shadow-2xl project-card"
        onclick="window.open('${project.links.live}')"
      >
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div class="space-y-6">
          ${renderVisual(project.visual)}
          <h4 class="font-space font-bold text-2xl leading-tight ${textHoverMap[project.theme]} transition-colors">
            ${project.title}
          </h4>
        </div>
        
        <div class="flex items-center gap-2">
           <span class="w-1.5 h-1.5 rounded-full ${dotColorMap[project.theme]}"></span>
           <span class="text-[10px] text-white/50 uppercase tracking-widest font-bold font-space">
             ${project.tags.join(" / ")}
           </span>
        </div>
      </div>
    `;
    })
    .join("");
};

export const renderMathData = () => {
    const container = document.querySelector("#math-data .grid");
    if(!container) return;

    const mathProjects = projects.filter(p => p.category === 'math');

    container.innerHTML = mathProjects.map(project => {
        const borderMap = {
            pink: "hover:border-pink-500/50",
            violet: "hover:border-violet-500/50",
            orange: "hover:border-orange-500/50",
            cyan: "hover:border-cyan-500/50",
            blue: "hover:border-blue-500/50",
            slate: "hover:border-slate-500/50",
            red: "hover:border-red-500/50",
            indigo: "hover:border-indigo-500/50",
            purple: "hover:border-purple-500/50"
        }
        
        // Define Visual Content based on type
        let visualContent = '';
        if(project.visual.type === 'pulse-circle') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-pink-500/20 to-black rounded-xl border border-white/5 group-hover:border-pink-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                  <span class="font-space font-black text-4xl text-pink-500 shadow-neon z-10">SOUND</span>
                  <div class="absolute inset-0 opacity-20 pointer-events-none">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-pink-600 rounded-full animate-pulse"></div>
                  </div>
                </div>`;
        } else if (project.visual.type === 'spin-square') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-violet-500/20 to-black rounded-xl border border-white/5 group-hover:border-violet-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-violet-500 shadow-neon z-10">POLYGON</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-violet-600 rotate-45 animate-spin-slow"></div>
                   </div>
                </div>`;
        } else if (project.visual.type === 'pulse-ping') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-orange-500/20 to-black rounded-xl border border-white/5 group-hover:border-orange-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                  <span class="font-space font-black text-4xl text-orange-500 shadow-neon z-10">VISUAL</span>
                  <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-orange-600 rounded-full animate-pulse"></div>
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-orange-400 rounded-full animate-ping"></div>
                  </div>
                </div>`;
        } else if (project.visual.type === 'bars-wave') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-cyan-500/20 to-black rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-cyan-500 shadow-neon z-10">SORT</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="flex gap-1 items-end justify-center h-full pb-8">
                        <div class="w-2 h-8 bg-cyan-500/50 animate-pulse"></div>
                        <div class="w-2 h-16 bg-cyan-500/50 animate-pulse" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-12 bg-cyan-500/50 animate-pulse" style="animation-delay: 0.2s"></div>
                        <div class="w-2 h-24 bg-cyan-500/50 animate-pulse" style="animation-delay: 0.3s"></div>
                        <div class="w-2 h-4 bg-cyan-500/50 animate-pulse" style="animation-delay: 0.4s"></div>
                     </div>
                   </div>
                </div>`;
        } else if (project.visual.type === 'grid-pulse') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-blue-500/20 to-black rounded-xl border border-white/5 group-hover:border-blue-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-blue-500 shadow-neon z-10">MAGIC</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="grid grid-cols-3 gap-1 w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12">
                        <div class="bg-blue-500/40 rounded-sm animate-pulse"></div><div class="bg-blue-500/20 rounded-sm"></div><div class="bg-blue-500/40 rounded-sm animate-pulse" style="animation-delay: 0.1s"></div>
                        <div class="bg-blue-500/20 rounded-sm"></div><div class="bg-blue-500/60 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div><div class="bg-blue-500/20 rounded-sm"></div>
                        <div class="bg-blue-500/40 rounded-sm animate-pulse" style="animation-delay: 0.2s"></div><div class="bg-blue-500/20 rounded-sm"></div><div class="bg-blue-500/40 rounded-sm animate-pulse" style="animation-delay: 0.3s"></div>
                     </div>
                   </div>
                </div>`;
        } else if (project.visual.type === 'grid-static') {
             visualContent = `
                <div class="w-full aspect-video bg-gradient-to-br from-slate-500/20 to-black rounded-xl border border-white/5 group-hover:border-slate-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-slate-500 shadow-neon z-10">CLASSIC</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="grid grid-cols-3 gap-0.5 w-full h-full p-8 opacity-30">
                        <div class="border border-slate-500/50"></div> <div class="border border-slate-500/50"></div> <div class="border border-slate-500/50"></div>
                        <div class="border border-slate-500/50"></div> <div class="border border-slate-500/50 bg-slate-500/20"></div> <div class="border border-slate-500/50"></div>
                        <div class="border border-slate-500/50"></div> <div class="border border-slate-500/50"></div> <div class="border border-slate-500/50"></div>
                     </div>
                   </div>
                </div>`;
        } else if (project.visual.type === 'grid-ant') {
             visualContent = `
                 <div class="w-full aspect-video bg-gradient-to-br from-red-500/20 to-black rounded-xl border border-white/5 group-hover:border-red-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-red-500 shadow-neon z-10">ANT</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="grid grid-cols-5 gap-0.5 w-full h-full p-6 animate-pulse">
                        <div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/40"></div><div class="bg-red-500/10"></div>
                        <div class="bg-red-500/10"></div><div class="bg-red-500/40"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div>
                        <div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/60 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div>
                        <div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/40"></div><div class="bg-red-500/10"></div>
                        <div class="bg-red-500/10"></div><div class="bg-red-500/40"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div><div class="bg-red-500/10"></div>
                     </div>
                   </div>
                 </div>`;
        } else if (project.visual.type === 'image') {
              // Bezel color map could be expanded, defaulting to generic look or specific logic
              const borderColor = project.theme === 'indigo' ? 'group-hover:border-indigo-500/50' :
                                  project.theme === 'cyan' ? 'group-hover:border-cyan-500/50' : 
                                  project.theme === 'purple' ? 'group-hover:border-purple-500/50' : 
                                  'group-hover:border-white/50';
                                  
              visualContent = `
                 <div class="w-full aspect-video bg-[#1a1a1a] rounded-xl border-[6px] border-[#333] relative shadow-2xl ${borderColor} transition-all overflow-hidden flex items-center justify-center">
                    <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full"></div>
                    <img src="${project.visual.src}" alt="${project.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                 </div>`;
        }

        const linkColor = {
             pink: "text-pink-400",
             violet: "text-violet-400",
             orange: "text-orange-400",
             cyan: "text-cyan-400",
             blue: "text-blue-400",
             slate: "text-slate-400",
             red: "text-red-400",
             indigo: "text-indigo-400",
             purple: "text-purple-400"
        }[project.theme] || "text-white";

        const linksHtml = `
            <div class="flex gap-4">
                <a href="${project.links.live}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Live ↗</a>
                ${project.links.repo ? `<a href="${project.links.repo}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Github ↗</a>` : ''}
            </div>
        `;

        return `
            <div class="group relative glass p-8 rounded-2xl ${borderMap[project.theme]} transition-all border border-white/5 overflow-hidden flex flex-col justify-between cursor-pointer h-full project-card" onclick="window.open('${project.links.live}', '_blank')">
               <div class="space-y-6">
                  ${visualContent}
                  <h3 class="text-2xl font-space font-bold">${project.title}</h3>
                  <p class="text-white/60 text-sm leading-relaxed">${project.desc}</p>
               </div>
               <div class="flex justify-between items-center pt-8 border-t border-white/5">
                  ${linksHtml}
                  <span class="text-[9px] text-white/20 font-bold">#${project.tags.join(" #")}</span>
               </div>
            </div>
        `;
    }).join('');
};

export const renderGaming = () => {
    const container = document.querySelector("#gaming .grid");
    if(!container) return;

    const gameProjects = projects.filter(p => p.category === 'game');
    
    container.innerHTML = gameProjects.map(project => {
        const borderMap = {
            amber: "hover:border-amber-500/50",
            green: "hover:border-green-500/50",
            cyan: "hover:border-cyan-500/50",
            orange: "hover:border-orange-500/50",
            red: "hover:border-red-500/50",
            yellow: "hover:border-yellow-500/50"
        };
        
        let visualContent = '';
        if(project.visual.type === 'spin-slow') {
              visualContent = `
                <div class="w-full h-40 bg-gradient-to-br from-amber-500/20 to-black rounded-xl border border-white/5 group-hover:border-amber-500/30 transition-all flex items-center justify-center relative overflow-hidden">
                   <span class="font-space font-black text-4xl text-amber-500 shadow-neon z-10">${project.visual.text}</span>
                   <div class="absolute inset-0 opacity-20 pointer-events-none">
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-amber-600 rounded-full animate-spin-slow"></div>
                   </div>
                </div>`;
        } else if (project.visual.type === 'text-only') {
             visualContent = `
                 <div class="w-full h-40 bg-gradient-to-br from-orange-500/20 to-black rounded-xl border border-white/5 group-hover:border-orange-500/30 transition-all flex items-center justify-center">
                    <span class="font-space font-black text-4xl text-orange-500 shadow-neon">${project.visual.text}</span>
                 </div>`;
        } else if (project.visual.type === 'image') {
              // Consolidated image render logic could be extracted if strictly necessary, but inline is fine
              const borderColor = project.theme === 'green' ? 'group-hover:border-green-500/50' : 
                                  project.theme === 'cyan' ? 'group-hover:border-cyan-500/50' :
                                  project.theme === 'red' ? 'group-hover:border-red-500/50' :
                                  project.theme === 'yellow' ? 'group-hover:border-yellow-500/50' : 'group-hover:border-white/50';

              visualContent = `
                <div class="w-full h-40 bg-[#1a1a1a] rounded-xl border-[6px] border-[#333] relative shadow-2xl ${borderColor} transition-all overflow-hidden flex items-center justify-center">
                   <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full"></div>
                   <img src="${project.visual.src}" alt="${project.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>`;
        }

        const linkColor = {
            amber: "text-amber-400",
            green: "text-green-400",
            cyan: "text-cyan-400",
            orange: "text-orange-400",
            red: "text-red-400",
            yellow: "text-yellow-400"
        }[project.theme] || "text-white";

        const linksHtml = `
            <div class="flex gap-4">
                 <a href="${project.links.live}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Live ↗</a>
                 ${project.links.repo ? `<a href="${project.links.repo}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Github ↗</a>` : ''}
            </div>
        `;

        return `
            <div class="group relative glass p-8 rounded-2xl ${borderMap[project.theme]} transition-all border border-white/5 overflow-hidden flex flex-col justify-between cursor-pointer h-full project-card" onclick="window.open('${project.links.live}', '_blank')">
               <div class="space-y-6">
                 ${visualContent}
                 <h3 class="text-2xl font-space font-bold">${project.title}</h3>
                 <p class="text-white/60 text-sm leading-relaxed">${project.desc}</p>
               </div>
               <div class="flex justify-between items-center pt-8 border-t border-white/5">
                 ${linksHtml}
                 <span class="text-[9px] text-white/20 font-bold">#${project.tags.join(" #")}</span>
               </div>
            </div>
        `;
    }).join('');
};

export const renderAILab = () => {
    const container = document.querySelector("#ai-lab .grid");
    if (!container) return;
  
    const aiProjects = projects.filter((p) => p.category === "ai");
  
    container.innerHTML = aiProjects
      .map((project) => {
        const borderMap = {
          cyan: "hover:border-cyan-500/50",
          indigo: "hover:border-indigo-500/50",
          purple: "hover:border-purple-500/50",
        };
  
        const glowColorMap = {
          cyan: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
          indigo: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
          purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
        };
  
        const pillColorMap = {
          cyan: "bg-cyan-500/20 text-cyan-400",
          indigo: "bg-indigo-500/20 text-indigo-400",
          purple: "bg-purple-500/20 text-purple-400",
        };
  
        const linkColor = {
          cyan: "text-cyan-400",
          indigo: "text-indigo-400",
          purple: "text-purple-400",
        }[project.theme];
  
        const pillText = project.tags[0] + (project.tags[2] ? " " + project.tags[2] : "");
  
        const linksHtml = `
              <div class="flex gap-4">
                  ${project.links.live ? `<a href="${project.links.live}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Live ↗</a>` : ""}
                  ${project.links.repo ? `<a href="${project.links.repo}" target="_blank" onclick="event.stopPropagation()" class="text-[10px] uppercase font-bold tracking-widest ${linkColor} hover:text-white transition-colors">Github ↗</a>` : ""}
              </div>
          `;
  
        return `
              <div
                class="group relative glass p-8 rounded-2xl ${borderMap[project.theme]} transition-all border border-white/5 overflow-hidden flex flex-col justify-between h-full cursor-pointer project-card"
                onclick="window.open('${project.links.live || project.links.repo}', '_blank')"
              >
                <div
                  class="absolute -right-20 -top-20 w-64 h-64 ${glowColorMap[project.theme]} rounded-full blur-3xl transition-all"
                ></div>
                <div class="relative z-10 space-y-6">
                  <span
                    class="px-3 py-1 ${pillColorMap[project.theme]} text-[9px] font-bold uppercase rounded-full"
                    >${pillText}</span
                  >
                  <h3 class="text-3xl font-space font-bold">${project.title}</h3>
                  <p class="text-white/60 text-sm leading-relaxed">
                    ${project.desc}
                  </p>
                  <div
                    class="flex justify-between items-center pt-8 border-t border-white/5"
                  >
                    ${linksHtml}
                    <span class="text-white/20 text-xs text-[10px] font-bold"
                      >#${project.tags.join(" #")}</span
                    >
                  </div>
                </div>
              </div>
          `;
      })
      .join("");
  };
