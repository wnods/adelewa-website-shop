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
      delay: 1000,
    },
  });
