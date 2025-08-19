(function () {
  window.trackClick = function trackClick(label = 'link') {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'button',
        event_label: label,
        transport_type: 'beacon', // mejor entrega antes de navegar
      });
    }
  };
})();

// TODO fix
(function () {
  window.toggleMenu = function () {
    let menu_wrapper = document.getElementById('menu-wrapper');
    let menu_backdrop = document.getElementById('menu-backdrop');

    console.log('??');

    menu_wrapper.classList.toggle('open');
    menu_backdrop.classList.toggle('active-menu');

    if (menu_backdrop.classList.contains('active-menu')) {
      document.body.style.overflow = 'hidden';
    } else {
      menu_backdrop.style.height = '';
      document.body.style.overflow = '';
    }
  };
})();
