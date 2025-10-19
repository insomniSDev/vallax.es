(function () {
  const toggleButton = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-menu-overlay");

  if (!toggleButton || !menu || !overlay) {
    return;
  }

  const bars = toggleButton.querySelectorAll("span");

  const openMenu = () => {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    toggleButton.setAttribute("aria-expanded", "true");
    toggleButton.classList.add("is-open");

    if (bars.length === 3) {
      bars[0].style.transform = "translateY(7px) rotate(45deg)";
      bars[1].style.opacity = "0";
      bars[2].style.transform = "translateY(-7px) rotate(-45deg)";
    }
  };

  const closeMenu = () => {
    menu.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.classList.remove("is-open");

    if (bars.length === 3) {
      bars[0].style.transform = "";
      bars[1].style.opacity = "1";
      bars[2].style.transform = "";
    }

    const detailsElement = document.getElementById("mobile-menu-more-details");
    if (detailsElement) {
      detailsElement.removeAttribute("open");
    }
  };

  window.closeMobileMenu = closeMenu;

  toggleButton.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener("mousedown", (event) => {
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
      if (!menu.classList.contains("hidden")) {
        closeMenu();
      }
    }
  });

  overlay.addEventListener("click", closeMenu);
})();
