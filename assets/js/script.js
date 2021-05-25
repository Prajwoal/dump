const menu_element = document.getElementById('menu-icon');
const nav = document.getElementById('nav');

menu_element.addEventListener('click', () => {
	nav.classList.toggle('show');
});
