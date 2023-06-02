//get all the imgs with data-src attribute
const images = document.querySelectorAll("[data-src");

//optional parameters being set for the IntersectionObserver
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

function preloadImg(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}
//first check to see if the IntersectionObserver is supported

// if ("IntersectionObserver" in window) {
//   const imgObserver = new IntersectionObserver((items, imgObserver ) => {
//     items.forEach((item) => {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         imgObserver.unobserve(item.target);
//       }
//     });
//   }, imgOptions);
//   //loop through each img and check status and load if necessary
//   imagesToLoad.forEach((img) => {
//     imgObserver.observe(img);
//   });
// } else {
//   // just load all imgs if not supported
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }
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
