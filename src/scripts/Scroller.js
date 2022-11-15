class Scroller {
  constructor(rootSelector) {
    this.header = document.querySelector(".header");
    this.articleAbout = document.querySelector(".article-about");
    this.articleReference = document.querySelector(".article-reference");
    this.articleGallery = document.querySelector(".article-gallery");
    this.footer = document.querySelector(".footer");
    const navItemsArray = [
      this.header,
      this.articleAbout,
      this.articleReference,
      this.articleGallery,
      this.footer,
    ];

    this.currentPositionIndex = navItemsArray.findIndex(this.isScroledIntoView);
  }

  isScroledIntoView(element) {
    const rect = element.getBoundingRect();
    const elementTop = rect.top;
    const elementBottom = rect.bottom;

    const isVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    return isVisible;
  }
}
