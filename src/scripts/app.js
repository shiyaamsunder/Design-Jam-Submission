const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.backdrop');
const navlinks = document.querySelectorAll('.header__nav-link');
let parallaxImg = document.querySelector('.parallax');

import card from './card';
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
