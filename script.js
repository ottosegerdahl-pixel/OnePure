console.log("OnePure website loaded!");

// ===========================
// Carousel / Auto-scroll
// ===========================
const carousel = document.getElementById('carousel');
if(carousel) {
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
}

// ===========================
// Fade-in för produktkort
// ===========================
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, i) => {
  setTimeout(() => card.classList.add('show'), i * 100);
});

// ===========================
// Sök/filter (index & shop)
// ===========================
const searchInput = document.getElementById('search');
if(searchInput) {
  searchInput.addEventListener('input', function(){
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    products.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      if(name.includes(query)) { 
        card.style.display='block'; 
        setTimeout(() => card.classList.add('show'), 50);
      } else { 
        card.style.display='none'; 
        card.classList.remove('show');
      }
    });
  });
}

// ===========================
// Navbar aktiv länk
// ===========================
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active-link');
  }
});
