export default class Scroller {
  constructor() {
    this.scrollElement = document.querySelectorAll(".scrollElement");
    this.scrollElementArray = [...this.scrollElement];
    this.navbar = document.querySelector(".header__nav");
    this.nav = document.querySelectorAll(".nav__options-option");
    this.navItemsArray = [...this.nav];
  }

  // return index of visible element from array
  scroll() {
    this.scrollElementArray.forEach((item, index) => {
      if (this.isScroledIntoView(item) === true) {
        this.currentIndex = index;
      }
    });
    return this.currentIndex;
  }

  // return true if our view is between this top and bottom block element
  isScroledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;
    const isVisible =
      elementTop <= this.navbar.clientHeight &&
      elementBottom >= window.innerHeight;

    return isVisible;
  }

  // add styles for the active item and delete for inactive
  selectActiveItem() {
    this.navItemsArray.forEach((item, index) => {
      if (index === this.scroll() && window.scrollY >= 1) {
        item.classList.add("nav__options-option--active");
      } else item.classList.remove("nav__options-option--active");
    });
  }
}
