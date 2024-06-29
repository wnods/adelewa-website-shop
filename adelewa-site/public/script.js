document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', (event) => {
        console.log('Menu icon clicked'); // Log para depuração
        navLinks.classList.toggle('show');
        event.stopPropagation(); // Evita que o clique no ícone feche o menu
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        const isClickInside = navLinks.contains(event.target) || menuIcon.contains(event.target);
        if (!isClickInside) {
            navLinks.classList.remove('show');
        }
    });
});

const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentItem = 0;
const totalItems = carouselItems.length;

function showItem(index) {
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });
    carouselItems[index].classList.add('active');
}

function nextItem() {
    currentItem = (currentItem + 1) % totalItems;
    showItem(currentItem);
}

function prevItem() {
    currentItem = (currentItem - 1 + totalItems) % totalItems;
    showItem(currentItem);
}

  nextButton.addEventListener('click', nextItem);
  prevButton.addEventListener('click', prevItem);

// Automatic slide
setInterval(nextItem, 5000);
