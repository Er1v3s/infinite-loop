const articleAboutHandle = document.querySelector(".article-about");
const articleReferenceHandle = document.querySelector(".article-reference");
const style = document.head.appendChild(document.createElement("style"));

// window.addEventListener("scroll", () => {
//   if (scrollY + window.innerHeight >= articleReferenceHandle.offsetTop) {
//     articleReferenceHandle.classList.add("article-reference--active");
//   } else if (scrollY + window.innerHeight < articleReferenceHandle.offsetTop) {
//     articleReferenceHandle.classList.remove("article-reference--active");
//   }

//   if (scrollY >= articleReferenceHandle.offsetTop - 165) {
//     style.innerHTML = `.article-reference--active::before {height: 100px !important;}`;
//   } else if (scrollY < articleReferenceHandle.offsetTop - 165) {
//     style.innerHTML = `.article-reference--active::before {height: 0px !important;}`;
//   }

//   if (
//     scrollY + window.innerHeight >
//     articleReferenceHandle.offsetTop + articleReferenceHandle.offsetHeight + 100
//   ) {
//     style.innerHTML = `.article-reference--active::after {height: 0 !important;} .article-reference--active::before {height: 100px !important;}`;
//   }

//   if (
//     scrollY >
//     articleReferenceHandle.offsetTop + articleReferenceHandle.offsetHeight + 100
//   ) {
//     articleReferenceHandle.classList.remove("article-reference--active");
//   }
// });
