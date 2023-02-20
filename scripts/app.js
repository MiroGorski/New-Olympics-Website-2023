const images = ["bbq-photo-1.jpg", "DSC_0370.jpg", "DSC1679-BW-min-scaled.jpg"];
let currentIndex = 0;
const background = document.querySelector(".background-image");

function changeBackgroundImage() {
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  const imageUrl = "2021/" + images[currentIndex];
  background.style.backgroundImage = `url(${imageUrl})`;
  currentIndex++;
}

setInterval(changeBackgroundImage, 5000);