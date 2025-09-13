
(function(){
  const grid = document.getElementById('highlights-grid');
  if(!grid) return;
  fetch('./highlights/highlights.json')
    .then(r=>r.json())
    .then(items => {
      grid.innerHTML = items.map(renderCard).join('');
    })
    .catch(()=>{
      grid.innerHTML = '<p class="muted">Could not load highlights.</p>';
    });

  function renderCard(item){
    const media = renderMedia(item);
    const title = item.href ? `<h3 class="hl-title"><a href="${item.href}" target="_blank" rel="noopener">${item.title||''}</a></h3>`
                            : `<h3 class="hl-title">${item.title||''}</h3>`;
    const desc = item.desc ? `<p class="hl-desc">${item.desc}</p>` : '';
    return `<article class="hl-card">${media}${title}${desc}</article>`;
  }

  function renderMedia(item){
    if(item.type === 'linkedin' && item.urn){
      const src = `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(item.urn)}`;
      return `<div class="hl-media"><iframe class="linkedin-embed" src="${src}" allowfullscreen title="LinkedIn Post"></iframe></div>`;
    }
    if(item.type === 'youtube' && item.videoId){
      const src = `https://www.youtube.com/embed/${item.videoId}`;
      const thumb = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
      return `<div class="hl-media"><iframe src="${src}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
    }
    // generic link card
    if(item.image){
      return `<div class="hl-media"><a href="${item.href||'#'}" target="_blank" rel="noopener"><img src="${item.image}" alt=""></a></div>`;
    }
    return '';
  }
})();
