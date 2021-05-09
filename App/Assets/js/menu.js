const overlay = document.getElementById('overlayEffect');
const menuBtn = document.querySelector('.menu-button');
const menuItemClose = document.querySelector('.close-menu-list');
const menu = document.querySelector('.menu');


function openCloseMenu() {
    menu.classList.toggle('show');
    overlay.classList.toggle('is-active');
}

menuBtn.addEventListener('click', openCloseMenu);
menuItemClose.addEventListener('click', openCloseMenu);