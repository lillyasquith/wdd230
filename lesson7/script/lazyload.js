const images = document.querySelectorAll("[data-src]");

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -100px 0px", //top, right, bottom, lelf
};

// function preloadImg(img) {
//   const src = img.getAttribute("data-src");
//   if (!src) {
//     return;
//   }
//   img.src = src;
// }
function preloadImg(img) {
  const src = img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = () => {
    img.removeAttribute("data-src");
  };
}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImg(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
