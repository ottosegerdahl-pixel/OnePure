console.log("OnePure website loaded!");
const carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollStep = 2;
let animationFrameId;

function autoScroll() {
  scrollAmount += scrollStep;
  if(scrollAmount >= carousel.scrollWidth / 2) scrollAmount = 0;
  carousel.scrollLeft = scrollAmount;
  animationFrameId = requestAnimationFrame(autoScroll);
}

autoScroll();
carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
carousel.addEventListener('mouseleave', () => autoScroll());
