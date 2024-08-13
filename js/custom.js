(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentItem = 0;
    let autoPlayInterval;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            galleryImages[i].classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    }

    function prevItem() {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showItem(currentItem);
    }

    nextButton.addEventListener('click', () => {
        nextItem();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        prevItem();
        resetAutoPlay();
    });

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentItem = index;
            showItem(currentItem);
            resetAutoPlay();
        });
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextItem, 1100);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    showItem(currentItem);
    startAutoPlay();
});

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2100,
    },
  });


gsap.from(".section-title", { 
    duration: 1, 
    y: -50, 
    opacity: 0, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".section-title", 
        start: "top 80%", 
    }
});


gsap.from(".PQN-section p", { 
    duration: 1, 
    y: 20, 
    opacity: 0, 
    stagger: 0.2, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".PQN-section p",
        start: "top 80%",
    }
});


gsap.from(".feature", { 
    duration: 1, 
    x: 100, 
    opacity: 0, 
    stagger: 0.9, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".feature",
        start: "top 80%",
    }
});

gsap.from(".img-wrap img", { 
    duration: 1.5, 
    scale: 0.8, 
    opacity: 0, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".img-wrap img",
        start: "top 80%",
    }
});

gsap.from(".imgs-grid .grid img", { 
    duration: 1, 
    scale: 0.8, 
    opacity: 0, 
    stagger: 0.5, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".imgs-grid", 
        start: "top 80%", 
    }
});


gsap.from(".encomenda-section p", { 
    duration: 1, 
    y: 20, 
    opacity: 0, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".encomenda-section p",
        start: "top 80%",
    }
});

gsap.from(".encomenda-section .btn", { 
    duration: 1, 
    scale: 0.5, 
    opacity: 0, 
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".encomenda-section .btn",
        start: "top 80%",
    }
});


gsap.utils.toArray('.post-entry').forEach((post, index) => {
    gsap.from(post, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: post,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
        },
    });

    gsap.from(post.querySelector('.post-thumbnail'), {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: post,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
        },
    });

    gsap.from(post.querySelector('.post-content-entry'), {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: post,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
        },
    });
});


gsap.from('.intro-excerpt h1', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: 'power2.out',
});

gsap.from('.intro-excerpt p', {
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 0.5,
    ease: 'power2.out',
});

gsap.from('.hero-img-wrap img', {
    duration: 1,
    opacity: 1,
    x: 100,
    ease: 'power2.out',
    delay: 0.5,
});