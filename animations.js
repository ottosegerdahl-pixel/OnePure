// Fade-in effekt för hero-text
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero h1, .hero p, .hero .btn');
  heroText.forEach ? heroText.forEach(el => el.classList.add('fade-in')) : heroText.classList.add('fade-in');
});

// Fade-in för produktkort när filtrerar
function filterProducts(category) {
  const cards = document.querySelectorAll('#productGrid .card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
      card.classList.add('fade-in-card');
    } else {
      card.style.display = 'none';
      card.classList.remove('fade-in-card');
    }
  });
}

// Navbar markering (aktiv sida)
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href) {
    link.classList.add('active-link');
  }
});
