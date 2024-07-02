document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
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
    }

     /// Carousel de merda
     const carousel = document.querySelector('.carousel');
     const carouselItems = carousel ? carousel.querySelectorAll('.carousel-item') : [];
     const prevButton = document.getElementById('prev');
     const nextButton = document.getElementById('next');
     let currentItem = 0;
     const totalItems = carouselItems.length;
 
     if (carousel && carouselItems.length > 0 && prevButton && nextButton) {
         prevButton.addEventListener('click', () => {
             console.log('Prev button clicked');
             carouselItems[currentItem].classList.remove('active');
             currentItem = (currentItem - 1 + totalItems) % totalItems;
             carouselItems[currentItem].classList.add('active');
         });
 
         nextButton.addEventListener('click', () => {
             console.log('Next button clicked');
             carouselItems[currentItem].classList.remove('active');
             currentItem = (currentItem + 1) % totalItems;
             carouselItems[currentItem].classList.add('active');
         });
     }
 
    // Smooth Scroll
    function smoothScroll(targetId, duration) {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    const links = document.querySelectorAll('.nav-links a, .dropdown a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId, 1000); // Ajuste a duração aqui (1000 ms = 1 segundo)
        });
    });
});
