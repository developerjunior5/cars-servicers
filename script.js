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
