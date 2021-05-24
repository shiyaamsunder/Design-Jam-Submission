const header = document.querySelector('.header');

window.onscroll = () => {
	const top = window.scrollY;
	if (top >= 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
};
