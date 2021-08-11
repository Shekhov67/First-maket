'use strict';
let menuBtn = document.querySelector('.burger span');
let menulist = document.querySelector('.menu');


menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menulist.classList.toggle('animate');
});

