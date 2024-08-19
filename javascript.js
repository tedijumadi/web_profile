// Navbar Toggle for Mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
});

console.log("Web Profile Loaded");
