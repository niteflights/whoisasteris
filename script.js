(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark") root.classList.add("dark");
  const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
function toggleTheme(){const r=document.documentElement,i=r.classList.toggle("dark");localStorage.setItem("theme",i?"dark":"light");}
function toggleNav(){const n=document.getElementById("nav"),b=document.querySelector(".nav-toggle");n.classList.toggle("open");const e=n.classList.contains("open");if(b)b.setAttribute("aria-expanded",e?"true":"false");}

function openAboutLightbox(){
  const lightbox = document.getElementById('about-lightbox');
  if (!lightbox) return;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeAboutLightbox(){
  const lightbox = document.getElementById('about-lightbox');
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAboutLightbox();
  }
});

document.addEventListener('click', (event) => {
  const lightbox = document.getElementById('about-lightbox');
  if (!lightbox || lightbox.hidden) return;

  if (event.target === lightbox) {
    closeAboutLightbox();
  }
});

