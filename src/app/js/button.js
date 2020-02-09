var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navTogglebtn = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navTogglebtn.classList.remove('.main-nav__toggle');


navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navTogglebtn.classList.remove('main-nav__toggle');
        navMain.classList.add('main-nav--opened');
        navTogglebtn.classList.add('main-nav__toggle--cross');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navTogglebtn.classList.add('main-nav__toggle');
        navTogglebtn.classList.remove('main-nav__toggle--cross');
    }
});