// Light by default; toggle allows dark mode if desired
(function() {
  const root = document.documentElement;
  const lsKey = "theme";
  const saved = localStorage.getItem(lsKey);
  if (saved === "dark") root.classList.add("dark"); // otherwise stays light by default

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Build gallery from photos.json
  fetch('./photos/photos.json')
    .then(r => r.json())
    .then(items => {
      const wrap = document.getElementById('gallery');
      if (!wrap) return;
      if (!Array.isArray(items) || items.length === 0) {
        wrap.innerHTML = '<p class="muted small">No photos yet — add some images to /photos and list them in photos.json.</p>';
        return;
      }
      wrap.innerHTML = items.map(p => `
        <figure>
          <img src="${p.src}" alt="${p.alt || ''}" loading="lazy" />
          <figcaption>${[p.caption, p.year].filter(Boolean).join(' • ')}</figcaption>
        </figure>
      `).join('');
    })
    .catch(() => {
      const wrap = document.getElementById('gallery');
      if (wrap) wrap.innerHTML = '<p class="muted small">Could not load photos.json. Make sure it exists in /photos.</p>';
    });
})();

function toggleTheme(){
  const root = document.documentElement;
  const nowDark = root.classList.toggle("dark");
  localStorage.setItem("theme", nowDark ? "dark" : "light");
}

function toggleNav(){
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".nav-toggle");
  nav.classList.toggle("open");
  const expanded = nav.classList.contains("open");
  if (btn) btn.setAttribute("aria-expanded", expanded ? "true" : "false");
}
