const aboutSectionHandle = document.querySelector(".about-section");
const referenceSectionHandle = document.querySelector(".reference-section");
const style = document.head.appendChild(document.createElement("style"));

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

class Scroller {
  constructor() {
    this.article = document.querySelector("");
  }
}
