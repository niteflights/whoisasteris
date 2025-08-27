(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") root.classList.add("dark"); // default light
  const yearEl = document.getElementById("year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
  fetch('./photos/photos.json').then(r=>r.json()).then(items=>{
    const wrap=document.getElementById('gallery'); if(!wrap) return;
    if(!Array.isArray(items)||items.length===0) return;
    wrap.innerHTML = items.map(p => `<figure><img src="${p.src}" alt="${p.alt||''}" loading="lazy" />${(p.caption||p.year)?`<figcaption>${[p.caption,p.year].filter(Boolean).join(' • ')}</figcaption>`:''}</figure>`).join('');
  });
})();
function toggleTheme(){const r=document.documentElement,i=r.classList.toggle("dark");localStorage.setItem("theme",i?"dark":"light");}
function toggleNav(){const n=document.getElementById("nav"),b=document.querySelector(".nav-toggle");n.classList.toggle("open");const e=n.classList.contains("open");if(b) b.setAttribute("aria-expanded",e?"true":"false");}
