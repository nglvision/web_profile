'use strict';

const buttonSpan = document.querySelectorAll('.button span');
const skillLi = document.querySelectorAll('.skill-con>ul>li');

buttonSpan.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
        buttonSpan[0].classList.toggle('stop');
        buttonSpan[1].classList.toggle('stop');
        skillLi.forEach((el, idx) => {
            el.classList.toggle(`pause${idx}`);
        });
    });
});