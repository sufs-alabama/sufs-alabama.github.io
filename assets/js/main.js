// Stand Up for Science Alabama — small progressive enhancements.
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('header-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
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

  // Event filters
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('.event-card');
  function applyFilter(f) {
    filters.forEach(function (b) {
      var active = b.dataset.filter === f;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(function (card) {
      card.hidden = f !== 'all' && card.dataset.category !== f;
    });
  }
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () { applyFilter(btn.dataset.filter); });
  });
  // Jumping to #meetup should never land on a hidden card
  window.addEventListener('hashchange', function () {
    if (location.hash === '#meetup' && filters.length) applyFilter('all');
  });

  // Lightbox for infographics / event galleries
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
