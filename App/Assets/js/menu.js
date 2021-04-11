const overlay = document.getElementById('overlayEffect');
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');


menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show');
    overlay.classList.toggle('is-active');
});