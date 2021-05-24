import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

// configure Swiper to use modulesj
Swiper.use([Autoplay]);

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	// setWrapperSize: true,
	grabCursor: true,
	followFinger: true,
	// autoplay: {
	// 	pauseOnMouseEnter: true,
	// },
	breakpoints: {
		480: {
			slidesPerView: 2,
			// spaceBetween: 100,
		},
		1126: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
