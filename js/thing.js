document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const header = document.querySelector('#header');

    hamburgerMenu.addEventListener('click', function() {
        header.classList.toggle('show-menu');
    });
});