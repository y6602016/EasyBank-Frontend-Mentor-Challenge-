const btnhamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');


btnhamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        overlay.classList.remove('fade-in');
        menu.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.add('fade-out');
        setTimeout(function() {
            header.classList.remove('open');
            overlay.classList.remove('fade-out');
            menu.classList.remove('fade-out');
        }, 300);

    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        menu.classList.add('fade-in');
        overlay.classList.add('fade-in');
    }
})