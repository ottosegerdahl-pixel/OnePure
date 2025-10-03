console.log("OnePure Shop loaded!");

// ===== Variabler =====
const searchInput = document.getElementById('search');
const categorySelect = document.getElementById('category');
const priceSelect = document.getElementById('price');
const products = document.querySelectorAll('.product-card');
const carousel = document.getElementById('product-carousel');

let scrollAmount = 0;
const scrollStep = 1;
let animationId;

// ===== Funktion: Auto-scroll carousel =====
function autoScroll() {
  scrollAmount += scrollStep;
  if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) scrollAmount = 0;
  carousel.scrollLeft = scrollAmount;
  animationId = requestAnimationFrame(autoScroll);
}
autoScroll();
carousel.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
carousel.addEventListener('mouseleave', () => autoScroll());

// ===== Funktion: Sök och filtrera =====
function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;
  const selectedPrice = priceSelect.value;

  products.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const category = card.dataset.category;
    const price = parseInt(card.dataset.price);

    // Pris-filter
    let priceMatch = true;
    if(selectedPrice === "0-199") priceMatch = price <= 199;
    if(selectedPrice === "200-299") priceMatch = price >= 200 && price <= 299;
    if(selectedPrice === "300+") priceMatch = price >= 300;

    // Kategori-filter
    let categoryMatch = selectedCategory === "" || category === selectedCategory;

    // Sök + filter logik
    if(name.includes(query) && categoryMatch && priceMatch) card.style.display = 'block';
    else card.style.display = 'none';
  });
}

// Event-listeners
searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);
priceSelect.addEventListener('change', filterProducts);
