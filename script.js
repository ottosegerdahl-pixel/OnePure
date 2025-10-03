console.log("OnePure website loaded!");

// ===== Rekommenderade produkter carousel auto-scroll =====
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

carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
carousel.addEventListener('mouseleave', () => autoScroll());

autoScroll();

// ===== Se till att produktkort inte blir svarta innan bilden laddats =====
const productCards = document.querySelectorAll('.product-card img');
productCards.forEach(img => {
  img.addEventListener('load', () => {
    img.parentElement.style.opacity = '1';
  });
});
