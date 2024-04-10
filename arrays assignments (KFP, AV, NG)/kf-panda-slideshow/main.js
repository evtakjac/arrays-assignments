// Kung Fu Panda Slideshow / Gallery

// Global Variable
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];
// Create image gallery
let imgContainerEl = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += `<img-src = images/ ${imgPaths[i]} >`;
}

// let imgIndex = 0;

// // Event Listeners
// document.getElementById("next").addEventListener("click", nextSlide);
// document.getElementById("prev").addEventListener("click", prevSlide);
// document.getElementById("random").addEventListener("click", randomSlide);

// // Event Functions
// function nextSlide() {
//   // Increase index and loop
//   imgIndex++;
//   if (imgIndex == imgPaths.length) {
//     imgIndex = 0;
//   }

//   // Display New Img
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// function prevSlide() {
//   // decrease index and loop
//   imgIndex--;
//   if (imgIndex == -1) {
//     imgIndex = imgPaths.length;
//   }

//   // Display New Img
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// function randomSlide() {
//   // Get random Index
//   imgIndex = (Math.random() * imgPaths.length).toFixed();

// //   Display New Img
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }
