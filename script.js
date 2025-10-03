// ===== Enkel logg när sidan laddas =====
console.log("OnePure website loaded!");

// ===== Carousel för rekommenderade produkter =====
const carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollStep = 2; // pixlar per frame
let animationFrameId;

function autoScroll() {
  scrollAmount += scrollStep;
  if(scrollAmount >= carousel.scrollWidth / 2) { 
    scrollAmount = 0; // loopar tillbaka
  }
  carousel.scrollLeft = scrollAmount;
  animationFrameId = requestAnimationFrame(autoScroll);
}

// Starta scroll
autoScroll();

// Pausa vid hover
carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
carousel.addEventListener('mouseleave', () => autoScroll());
