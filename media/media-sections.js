(function(){
  const newsGrid = document.getElementById('news-grid');
  const videosGrid = document.getElementById('videos-grid');

  if (newsGrid){
    fetch('./news/news.json').then(r=>r.json()).then(items=>{
      newsGrid.innerHTML = items.map(renderCard).join('');
    }).catch(()=>newsGrid.innerHTML='<p class="muted">Could not load news.</p>');
  }
  if (videosGrid){
    fetch('./videos/videos.json').then(r=>r.json()).then(items=>{
      videosGrid.innerHTML = items.map(renderCard).join('');
    }).catch(()=>videosGrid.innerHTML='<p class="muted">Could not load videos.</p>');
  }

  function renderCard(item){
    const media = renderMedia(item);
    const title = item.href
      ? `<h3 class="media-title"><a href="${item.href}" target="_blank" rel="noopener">${item.title||''}</a></h3>`
      : `<h3 class="media-title">${item.title||''}</h3>`;
    const desc = item.desc ? `<p class="media-desc">${item.desc}</p>` : '';
    return `<article class="media-card">${media}<div class="media-body">${title}${desc}</div></article>`;
  }

  function renderMedia(item){
    if (item.type === 'linkedin' && item.urn){
      const src = `https://www.linkedin.com/embed/feed/update/${encodeURIComponent(item.urn)}`;
      return `<div class="media-media"><iframe class="media-embed" src="${src}" allowfullscreen title="LinkedIn Post"></iframe></div>`;
    }
    if (item.type === 'youtube' && item.videoId){
      const src = `https://www.youtube.com/embed/${item.videoId}`;
      return `<div class="media-media"><iframe class="media-embed" src="${src}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
    }
    if (item.image){
      const img = `<img src="${item.image}" alt="">`;
      const wrapStart = item.href ? `<a href="${item.href}" target="_blank" rel="noopener">` : '';
      const wrapEnd = item.href ? `</a>` : '';
      return `<div class="media-media">${wrapStart}${img}${wrapEnd}</div>`;
    }
    return '';
  }
})();
