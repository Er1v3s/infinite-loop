class Scroller {
  constructor() {
    this.header = document.querySelector(".header");
    this.articleAbout = document.querySelector(".article-about");
    this.articleReference = document.querySelector(".article-reference");
    this.articleGallery = document.querySelector(".article-gallery");
    this.footer = document.querySelector(".footer");
    const bodySelectorsArray = [
      this.header,
      this.articleAbout,
      this.articleReference,
      this.articleGallery,
      this.footer,
    ];
    this.userIsScrolling = false;

    this.nav = document.querySelectorAll(".nav__options-option");
    this.navItemsArray = [...this.nav];

    this.currentPositionIndex = bodySelectorsArray.findIndex(
      this.isScroledIntoView
    );
    this.isScroledIntoView(this.bodySelectorsArray[0]);
  }

  listenScroll = () => {
    if (this.userIsScrolling) return;
    this.userIsScrolling = true;

    setTimeout(() => {
      this.userIsScrolling = false;
    }, 500);
  };

  isScroledIntoView(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    return isVisible;
  }

  selectActiveItem() {
    navItemsArray.forEach(item, (index) => {
      if (index === this.currentPositionIndex) {
        item.classList.add("nav__options-option--active");
      } else item.classList.remove("nav__options-option--active");
    });
  }
}
