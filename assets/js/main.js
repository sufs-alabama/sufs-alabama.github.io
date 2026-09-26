// Stand Up for Science Alabama — small progressive enhancements.
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Dismissible announcement bar (remembered per message)
  var bar = document.getElementById('announcement');
  if (bar) {
    var key = 'sufs-al-dismissed:' + bar.dataset.message;
    try { if (localStorage.getItem(key)) bar.hidden = true; } catch (e) {}
    bar.querySelector('.announcement-close').addEventListener('click', function () {
      bar.hidden = true;
      try { localStorage.setItem(key, '1'); } catch (e) {}
    });
  }

  // Lightbox for flyers and infographics
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
    box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
    box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
  }
})();
