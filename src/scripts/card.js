const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	grabCursor: true,
	followFinger: true,
	autoplay: {
		pauseOnMouseEnter: true,
	},
	breakpoints: {
		480: {
			slidesPerView: 1,
		},

		541: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
