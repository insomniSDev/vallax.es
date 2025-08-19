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

(function () {
  window.toggleMenu = function () {
    let menu_wrapper = document.getElementById('menu-wrapper')
    let menu_content = document.getElementById('menu-content')
    let menu_backdrop = document.getElementById('menu-backdrop')

    menu_wrapper.classList.toggle('open')
    menu_content.classList.toggle('active-menu')
    menu_backdrop.classList.toggle('hidden')

    if (menu_content.classList.contains('active-menu')) {
      document.body.style.overflow = 'hidden' // Desactiva scroll
    } else {
      menu_content.style.height = ''
      document.body.style.overflow = '' // Restaura scroll
    }
  };
})();
