const openMenu = document.querySelector(".open__menu");
const closeMenu = document.querySelector(".close__menu");
navLinks = document.querySelector(".nav__links");
mobileNavLinks = document.querySelector(".mobile__nav--links");
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("#header-container h3", {
  ...scrollRevealOption,
});
ScrollReveal().reveal("#header-container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("#about  p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal("#btn-appointment", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal("#services", {
  ...scrollRevealOption,
  interval: 500,
});

//script for the navigation
openMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileNavLinks.classList.remove("right-[-100%]");
  mobileNavLinks.classList.add("right-0");
});

closeMenu.addEventListener("click", function (e) {
  e.preventDefault();
  mobileNavLinks.classList.add("right-[-100%]");
  mobileNavLinks.classList.remove("right-0");
});

navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
mobileNavLinks.addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("mobile__nav--link")) {
    const id = e.target.getAttribute("href");
    mobileNavLinks.classList.add("right-[-100%]");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
