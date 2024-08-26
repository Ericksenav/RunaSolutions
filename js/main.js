/* scripts.js */
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializa el carrusel principal
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
  
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
  
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);

    // cambiar logo segun fondo
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('transparent');
            logo.src = 'assets/img/logo2.jpg'; // Cambia a logo claro
        } else {
            header.classList.remove('transparent');
            logo.src = 'assets/img/logo-dark.png'; // Cambia a logo oscuro
        }
    });
  
    // Inicializa el carrusel de clientes
    const clientCarousel = document.querySelector('.clientes-carousel');
    const clients = clientCarousel.querySelectorAll('.clientes-item');
    let currentClient = 0;
    const visibleClients = 4; // Número de clientes visibles al mismo tiempo
  
    function showClients() {
        clients.forEach((client, i) => {
            client.style.display = i >= currentClient && i < currentClient + visibleClients ? 'block' : 'none';
        });
    }
  
    function nextClients() {
    currentClient = (currentClient + 1) % clients.length;
    if (currentClient + visibleClients > clients.length) {
        currentClient = 0; // Reinicia al principio si excede el número total de clientes
    }
    showClients();
    }
  
    showClients();
    setInterval(nextClients, 3000);
  
    // Menu de navegación responsivo
    const nav = document.querySelector('nav ul');
    const toggle = document.querySelector('.nav-toggle');
   
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open'); // Abre o cierra el menú
    });
  
    // Cambiar la transparencia del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
  
    // Añadir el año actual al pie de página
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
});
  