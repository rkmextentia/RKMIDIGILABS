const c=document.getElementById("mobile-menu-button"),d=document.getElementById("mobile-menu");c&&d&&c.addEventListener("click",()=>{d.classList.toggle("hidden")});const f=document.getElementById("header-search-trigger"),g=document.getElementById("mobile-search-btn"),s=document.getElementById("search-modal"),h=document.getElementById("search-modal-close"),m=document.getElementById("search-modal-input");function o(){s&&(s.classList.remove("hidden"),setTimeout(()=>m?.focus(),50))}function i(){s&&s.classList.add("hidden")}f?.addEventListener("click",o);g?.addEventListener("click",o);h?.addEventListener("click",i);s?.addEventListener("click",t=>{t.target===s&&i()});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey)&&t.key==="k"&&(t.preventDefault(),s?.classList.contains("hidden")?o():i()),t.key==="Escape"&&i()});const l=[{name:"Courses & Masterclasses",href:"/courses",tags:"aigp iso 42001 nist rmf training video academy"},{name:"Specialised Training",href:"/specialised-training",tags:"red-teaming prompt injection fria watermarking c2pa owasp"},{name:"Corporate Training",href:"/corporate-training",tags:"workforce boardroom executive enterprise rfp cohort briefing"},{name:"Certifications Roadmap",href:"/certifications",tags:"iapp aigp iso 42001 lead auditor lead implementer cisa crisc"},{name:"Advisory Services",href:"/services",tags:"consultancy eu ai act high risk annex iii soc 2 tprm audit"},{name:"Enterprise Case Studies",href:"/case-studies",tags:"fintech healthtech saas retail results outcomes metrics"},{name:"Regulatory Frameworks",href:"/frameworks",tags:"eu ai act nist ai rmf 1.0 iso 27001 iso 42001 standards"},{name:"Learning Resources & Toolkits",href:"/resources",tags:"free templates checklists fria genai policy glossary lexicon"},{name:"Blog & Video Dispatches",href:"/blog",tags:"articles dispatches videos youtube news compliance"},{name:"About RKMIDIGILABS",href:"/about",tags:"mission leadership company rajesh bhagia contact credentials"},{name:"Company Profile & Deck",href:"/company-profile",tags:"deck brochure media presentation channels youtube linkedin"}];m?.addEventListener("input",t=>{const a=t.target.value.toLowerCase().trim(),n=document.getElementById("search-results-container");if(!n)return;if(!a){n.innerHTML=`
        <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-2 py-1">Quick Domain Links</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          ${l.slice(0,8).map(e=>`
            <a href="${e.href}" class="p-2.5 rounded-lg bg-[#112649] hover:bg-[#1d3d75] text-white flex items-center justify-between transition-colors">
              <span class="font-bold">${e.name}</span>
              <span class="text-emerald-400 text-[10px] font-mono">${e.href}</span>
            </a>
          `).join("")}
        </div>
      `;return}const r=l.filter(e=>e.name.toLowerCase().includes(a)||e.tags.includes(a)||e.href.includes(a));r.length===0?n.innerHTML=`
        <div class="p-6 text-center text-slate-400 text-xs font-mono">
          No matches found for "<span class="text-white">${a}</span>". Try "AIGP", "ISO 42001", "EU AI Act", or "Red-Teaming".
        </div>
      `:n.innerHTML=`
        <div class="text-[11px] font-mono uppercase tracking-wider text-emerald-400 px-2 py-1">${r.length} Results Found</div>
        <div class="space-y-1.5">
          ${r.map(e=>`
            <a href="${e.href}" class="p-3 rounded-lg bg-[#112649] hover:bg-[#162f59] text-white flex items-center justify-between transition-colors border border-slate-700/60 block">
              <div>
                <div class="font-bold text-sm text-white hover:text-emerald-300">${e.name}</div>
                <div class="text-[11px] text-slate-300 font-mono mt-0.5">${e.tags}</div>
              </div>
              <span class="text-emerald-400 text-xs font-mono font-bold">${e.href} →</span>
            </a>
          `).join("")}
        </div>
      `});
