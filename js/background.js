const desktopImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
const mobileImages = ["mobile-bg1.jpg", "mobile-bg2.jpg", "mobile-bg3.jpg", "mobile-bg4.jpg", "mobile-bg5.jpg"];

function getRandomImage(images) {
  return images[Math.floor(Math.random() * images.length)];
}

function setBackground() {
  const isMobile = window.innerWidth <= 768;
  const chosenImage = isMobile ? getRandomImage(mobileImages) : getRandomImage(desktopImages);
  document.body.style.backgroundImage = `url('img/${chosenImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

window.addEventListener("resize", setBackground);
setBackground();
