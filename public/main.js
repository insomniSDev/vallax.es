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
  const toggleButton = document.getElementById('mobile-menu-toggle')
  const menu = document.getElementById('mobile-menu')
  const overlay = document.getElementById('mobile-menu-overlay')

  if (!toggleButton || !menu || !overlay) {
    return
  }

  const bars = toggleButton.querySelectorAll('span')

  const openMenu = () => {
    menu.classList.remove('hidden')
    overlay.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
    toggleButton.setAttribute('aria-expanded', 'true')

    if (bars.length === 3) {
      bars[0].style.transform = 'translateY(7px) rotate(45deg)'
      bars[1].style.opacity = '0'
      bars[2].style.transform = 'translateY(-7px) rotate(-45deg)'
    }
  }

  const closeMenu = () => {
    menu.classList.add('hidden')
    overlay.classList.add('hidden')
    document.body.style.overflow = ''
    toggleButton.setAttribute('aria-expanded', 'false')

    if (bars.length === 3) {
      bars[0].style.transform = ''
      bars[1].style.opacity = '1'
      bars[2].style.transform = ''
    }
  }

  window.closeMobileMenu = closeMenu

  toggleButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      openMenu()
    } else {
      closeMenu()
    }
  })

  overlay.addEventListener('click', closeMenu)
})();
