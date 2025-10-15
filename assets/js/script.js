// jQuery Function

(function ($) {
	$(document).ready(function () {
		$(".toggle-menu").on("click", function () {
			$("#menu").toggleClass("active");
		});

		const swiper = new Swiper(".store-slider", {
			loop: true,
			spaceBetween: 20,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-next",
				prevEl: ".swiper-prev",
			},
			// Responsive slides per view
			breakpoints: {
				0: { slidesPerView: 1 }, // phones
				500: { slidesPerView: 1.5 }, // phones
				640: { slidesPerView: 2 }, // tablets
				1024: { slidesPerView: 3 }, // desktops
			},
			// Better keyboard & screen-reader support
			a11y: { enabled: true },
			keyboard: { enabled: true },
		});
		const swiperHero = new Swiper(".hero-slider", {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-hero-pagination",
				clickable: true,
			},
			// Responsive slides per view
			breakpoints: {
				0: { slidesPerView: 1 }, // phones
			},
			// Better keyboard & screen-reader support
			a11y: { enabled: true },
			keyboard: { enabled: true },
		});
		const reviewSlider = new Swiper(".review-slider", {
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-review-pagination",
				clickable: true,
			},
			// Responsive slides per view
			breakpoints: {
				0: { slidesPerView: 1 }, // phones
			},
			// Better keyboard & screen-reader support
			a11y: { enabled: true },
			keyboard: { enabled: true },
		});
	});
})(jQuery);
