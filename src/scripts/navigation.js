const navHandle = document.querySelector(".header__nav");
const burgerBtnHandle = document.querySelector(".nav__burger-mobile");
const burgerMenu = document.querySelector(".nav__options");
const navOptionHandle = document.querySelectorAll(".nav__options-option");

window.addEventListener("DOMContentLoaded", () => {
  burgerBtnHandle.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 166) {
    navHandle.classList.add("header__nav--active");
    burgerBtnHandle.classList.add("nav__burger-mobile--active");
    navOptionHandle.forEach((item) => {
      item.classList.add("nav__options-option--active");
    });
  } else {
    navHandle.classList.remove("header__nav--active");
    burgerBtnHandle.classList.remove("nav__burger-mobile--active");
    navOptionHandle.forEach((item) => {
      item.classList.remove("nav__options-option--active");
    });
  }
});
