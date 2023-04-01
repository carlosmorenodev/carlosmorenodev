const headerNav = document.getElementById('headerNav');
const responsiveNav = document.getElementById('responsiveNav');

responsiveNav.addEventListener('click', () => {
    headerNav.classList.toggle('responsive-nav-active');
})