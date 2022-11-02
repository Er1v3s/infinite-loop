import "./scss/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".nav__options");
  const burgerBtn = document.querySelector(".nav__burger--mobile");

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  });
});
