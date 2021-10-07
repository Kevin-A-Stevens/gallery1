const currentImageAttrs = {};

const displayImage = document.querySelector("#display img");
const fsImages = document.querySelectorAll("#film-strip img");

fsImages.forEach(function (fsImage) {
  fsImage.addEventListener("click", function (event) {
    displayImage.src = event.target.src;
    displayImage.alt = event.target.alt;
  });
});
