'use strict';
let btnMenu = document.querySelector('.fa-bars');
let navMenu = document.querySelector('.nav__menu');
let closeBtn = document.querySelector('.fa-times-circle');

closeBtn.style.display = 'none';

btnMenu.addEventListener('click', function () {
    navMenu.style.display = 'block';
    btnMenu.style.visibility = 'hidden';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    navMenu.style.display = 'none';
    btnMenu.style.visibility = 'visible';
    closeBtn.style.display = 'none';
});