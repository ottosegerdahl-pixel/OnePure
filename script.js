console.log("OnePure website loaded!");

// ===== Hero Fade-in =====
window.addEventListener('load', () => {
  const heroText = document.querySelectorAll('.hero h1, .hero p, .hero .btn');
  heroText.forEach(el => el.classList.add('fade-in'));
});

// ===== Carousel Auto-scroll =====
const carousel = document.querySelector('.products-wrapper');
if(carousel){
  let scrollAmount = 0;
  const scrollStep = 1.5; // snabbhet
  let animationFrameId;

  function autoScroll() {
    scrollAmount += scrollStep;
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
    carousel.scrollLeft = scrollAmount;
    animationFrameId = requestAnimationFrame(autoScroll);
  }

  autoScroll();

  carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
  carousel.addEventListener('mouseleave', () => autoScroll());
}

// ===== Produktfilter =====
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');

function filterProducts() {
  const query = searchInput ? searchInput.value.toLowerCase() : '';
  const category = categorySelect ? categorySelect.value : '';
  const priceRange = priceSelect ? priceSelect.value : '';
  const products = document.querySelectorAll('.product-card');

  products.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const cardCategory = card.dataset.category;
    const cardPrice = parseInt(card.dataset.price);

    let priceMatch = true;
    if(priceRange){
      if(priceRange === '0-199') priceMatch = cardPrice <= 199;
      else if(priceRange === '200-299') priceMatch = cardPrice >= 200 && cardPrice <= 299;
      else if(priceRange === '300+') priceMatch = cardPrice >= 300;
    }

    const categoryMatch = category === '' || cardCategory === category;
    const searchMatch = name.includes(query);

    if(categoryMatch && priceMatch && searchMatch){
      card.style.display = 'block';
      card.classList.add('fade-in-card');
    } else {
      card.style.display = 'none';
      card.classList.remove('fade-in-card');
    }
  });
}

if(searchInput) searchInput.addEventListener('input', filterProducts);
if(categorySelect) categorySelect.addEventListener('change', filterProducts);
if(priceSelect) priceSelect.addEventListener('change', filterProducts);

// ===== Fade-in för produktkort vid scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in-card');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => observer.observe(card));

// ===== Navbar aktiv länk =====
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href) link.classList.add('active-link');
});
