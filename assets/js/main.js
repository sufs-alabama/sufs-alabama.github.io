// Stand Up for Science Alabama — small enhancements on top of Bootstrap.
(function () {
  // Dismissible announcement bar (remembered per message)
  var bar = document.getElementById('announcement');
  if (bar) {
    var key = 'sufs-al-dismissed:' + bar.dataset.message;
    try { if (localStorage.getItem(key)) bar.hidden = true; } catch (e) {}
    bar.querySelector('.btn-close').addEventListener('click', function () {
      bar.hidden = true;
      try { localStorage.setItem(key, '1'); } catch (e) {}
    });
  }

  // Event filters
  var filters = document.querySelectorAll('.filter');
  var items = document.querySelectorAll('.event-item');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      filters.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('btn-dark', active);
        b.classList.toggle('btn-outline-dark', !active);
        b.setAttribute('aria-pressed', String(active));
      });
      items.forEach(function (item) {
        item.hidden = f !== 'all' && item.dataset.category !== f;
      });
    });
  });

  // Flyer / infographic viewer
  var box = document.getElementById('lightbox');
  if (box && typeof box.showModal === 'function') {
    var img = box.querySelector('img');
    document.querySelectorAll('button.gallery-item[data-full]').forEach(function (item) {
      item.addEventListener('click', function () {
        var thumb = item.querySelector('img');
        img.src = item.dataset.full;
        img.alt = thumb ? thumb.alt : '';
        box.showModal();
      });
    });
    box.querySelector('.btn-close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }
})();
