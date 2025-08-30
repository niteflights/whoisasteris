(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") root.classList.add("dark");
  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
  fetch('./photos/photos.json').then(r=>r.json()).then(items=>{
    const g=document.getElementById('gallery'); if(!g||!Array.isArray(items)) return;
    g.innerHTML = items.map(p=>`<figure><img src="${p.src}" alt="${p.alt||''}" loading="lazy" />${(p.caption)?`<figcaption>${p.caption}</figcaption>`:''}</figure>`).join('');
  }).catch(()=>{});
})();
function toggleTheme(){const r=document.documentElement,i=r.classList.toggle("dark");localStorage.setItem("theme",i?"dark":"light");}
function toggleNav(){const n=document.getElementById("nav"),b=document.querySelector(".nav-toggle");n.classList.toggle("open");const e=n.classList.contains("open");if(b)b.setAttribute("aria-expanded",e?"true":"false");}
