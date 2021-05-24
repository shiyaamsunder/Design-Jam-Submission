const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const navlinks = document.querySelectorAll('.header__nav-link');

const reviewCards = document.querySelectorAll('review__card');

gsap.registerPlugin(ScrollTrigger);

import './card';
import './header';
function openSideBar() {
	backdrop.style.display = 'block';
	sidebar.style.transition = 'all 250ms ease';
	sidebar.style.transform = 'translateX(0)';
	// gsap.to('.sidebar', { duration: 0.25, x: '0%', ease: 'linear' });
}

function closeSideBar() {
	sidebar.style = `@media and screen(max-width:768px){ transform: translateX(-100%); }`;
	backdrop.style.display = 'none';
	sidebar.style.transition = 'all 250ms ease';
}

burger.addEventListener('click', openSideBar);
backdrop.addEventListener('click', closeSideBar);
navlinks.forEach((link) => {
	link.addEventListener('click', closeSideBar);
});

gsap.from('.header__container', { duration: 1.2, y: -100, opacity: 0 });

gsap.from('.landing__text', {
	duration: 1,
	x: '-100%',
	delay: 0.5,
	opacity: 0,
});
gsap.from('.landing__image', {
	duration: 1.5,
	y: -200,
	delay: 0.7,
	opacity: 0,
});
gsap.from('.landing__button', {
	duration: 1,
	y: 50,
	opacity: 0,
	stagger: 0.5,
	delay: 0.9,
});

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.review',
		start: 'top 50%',
		end: 'top top',
	},
});

tl.from('.review__card', {
	y: -100,
	opacity: 0,
	duration: 1,
	stagger: 0.1,
});

const aboutTl = gsap.timeline({
	scrollTrigger: {
		trigger: '.about',
		start: 'top 50%',
		end: 'top top',
	},
});

aboutTl.from('.about__image', { opacity: 0, duration: 1 });
aboutTl.from('.about__heading', { opacity: 0, duration: 1, y: -20 });
aboutTl.from('.about__text', { opacity: 0, y: -10, stagger: 0.2, duration: 1 });
