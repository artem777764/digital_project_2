document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mainNav.classList.remove("-translate-x-full");
      menuToggle.setAttribute("aria-expanded", "true");
    } else {
      mainNav.classList.add("-translate-x-full");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        mainNav.classList.add("-translate-x-full");
        isOpen = false;
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.remove("opacity-0", "invisible");
    scrollTopButton.classList.add("opacity-100", "visible");
  } else {
    scrollTopButton.classList.add("opacity-0", "invisible");
    scrollTopButton.classList.remove("opacity-100", "visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});