import Scroller from "./Scroller";

window.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.querySelector("#root");
  const scroller = new Scroller(rootElement);
  window.addEventListener("scroll", () => scroller.selectActiveItem());

  const navHandle = document.querySelector(".header__nav");
  const burgerBtnHandle = document.querySelector(".nav__burger-mobile");
  const burgerMenu = document.querySelector(".nav__options");

  burgerBtnHandle.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
  });
  window.addEventListener("scroll", () => {
    if (scrollY >= 1) {
      navHandle.classList.add("header__nav--active");
      burgerBtnHandle.classList.add("nav__burger-mobile--active");
    } else {
      navHandle.classList.remove("header__nav--active");
      burgerBtnHandle.classList.remove("nav__burger-mobile--active");
    }
  });
});
