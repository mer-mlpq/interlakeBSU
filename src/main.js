const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const menuLinks = primaryNav.querySelectorAll("a");

function toggleMenu() {
  const isOpen = primaryNav.hasAttribute("data-visible");
  const isSmallScreen = window.innerWidth < 700;

  if (isOpen) {
    primaryNav.removeAttribute("data-visible");
    primaryHeader.removeAttribute("data-overlay");
    document.body.classList.remove("no-scroll");
  } else {
    primaryNav.setAttribute("data-visible", "");
    primaryHeader.setAttribute("data-overlay", "");
    if (isSmallScreen) document.body.classList.add("no-scroll");
  }
}

navToggle.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      toggleMenu();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      e.preventDefault();
    } else {
      toggleMenu();
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
