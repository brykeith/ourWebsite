const menuIcon = document.querySelector('.hamburger-button');
const navbar = document.querySelector('.menu-wrap');

// adds and removes the "change" class from the navbar when you click on the hamburger-menu
menuIcon.addEventListener('click', ()=> {navbar.classList.toggle("active");});