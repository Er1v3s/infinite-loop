const navHandle = document.querySelector(".header__nav");
const burgerBtnHandle = document.querySelector(".nav__burger-mobile");
const burgerMenu = document.querySelector(".nav__options");
const navOptionHandle = document.querySelectorAll(".nav__options-option");
const aboutSectionHandle = document.querySelector(".about-section");
const referenceSectionHandle = document.querySelector(".reference-section");
const style = document.head.appendChild(document.createElement("style"));

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

window.addEventListener("scroll", () => {
  if (scrollY + window.innerHeight >= referenceSectionHandle.offsetTop) {
    referenceSectionHandle.classList.add("reference-section--active");
  } else if (scrollY + window.innerHeight < referenceSectionHandle.offsetTop) {
    referenceSectionHandle.classList.remove("reference-section--active");
  }

  if (scrollY >= referenceSectionHandle.offsetTop - 165) {
    style.innerHTML = `.reference-section--active::before {height: 100px !important;}`;
  } else if (scrollY < referenceSectionHandle.offsetTop - 165) {
    style.innerHTML = `.reference-section--active::before {height: 0px !important;}`;
  }

  if (
    scrollY + window.innerHeight >
    referenceSectionHandle.offsetTop + referenceSectionHandle.offsetHeight + 100
  ) {
    style.innerHTML = `.reference-section--active::after {height: 0 !important;} .reference-section--active::before {height: 100px !important;}`;
  }

  if (
    scrollY >
    referenceSectionHandle.offsetTop + referenceSectionHandle.offsetHeight + 100
  ) {
    referenceSectionHandle.classList.remove("reference-section--active");
  }
});
