// Rolagem suave para links do menu
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Animação ao aparecer na tela
const elementos = document.querySelectorAll('.card, section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    }
  });
});

elementos.forEach(el => observer.observe(el));