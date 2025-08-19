(function(){const r=document.documentElement,s=localStorage.getItem("theme");if(s==="light")r.classList.add("light");const y=document.getElementById("year");if(y) y.textContent=new Date().getFullYear();})();
function toggleTheme(){const r=document.documentElement,i=r.classList.toggle("light");localStorage.setItem("theme",i?"light":"dark");}
function toggleNav(){const n=document.getElementById("nav"),b=document.querySelector(".nav-toggle");n.classList.toggle("open");const e=n.classList.contains("open");if(b) b.setAttribute("aria-expanded",e?"true":"false");}
