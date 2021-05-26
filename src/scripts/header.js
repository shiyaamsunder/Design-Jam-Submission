const header = document.querySelector('.header');
const links = document.querySelectorAll('.header__nav-link');
window.onscroll = () => {
	const top = window.scrollY;
	if (top >= 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
};

links.forEach((link) => {
	link.addEventListener('click', () => {
		const activeLink = document.querySelector('.navactive');
		if (activeLink) {
			activeLink.classList.remove('navactive');
		}
		link.classList.add('navactive');
	});
});
