const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu_item');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItems.forEach(item => item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');    
}));


