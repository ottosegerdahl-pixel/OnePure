console.log("OnePure website loaded!");

// Carousel auto-scroll
const carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollStep = 2;
let animationFrameId;

function autoScroll() {
  if(!carousel) return;
  scrollAmount += scrollStep;
  if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
  carousel.scrollLeft = scrollAmount;
  animationFrameId = requestAnimationFrame(autoScroll);
}

autoScroll();

carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
carousel.addEventListener('mouseleave', () => autoScroll());
