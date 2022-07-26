'use strict';

const slideCon = document.querySelector('.slide-con');
const slideLi = document.querySelectorAll('.slide-con>ul>li');
// console.log(slideLi)

const itemsUl = document.querySelector('.items>ul');
const itemsLi = document.querySelectorAll('.items>ul>li');

itemsUl.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return false;
    }
    itemsLi.forEach((el, idx) => {
        if (e.target === el) {
            slideCon.style.top = -100 * idx + 'vh';
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        };
    });
});