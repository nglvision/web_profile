'use strict';

const innerHeader = document.querySelector('.inner-header');
const h1Logo = document.querySelector('.inner-header h1.logo');
const dotMenu = document.querySelector('.dot-menu');
const dotMenuLi1 = document.querySelectorAll('.dot>ul>li.li1');
const dotMenuLi2 = document.querySelector('.dot>ul>li.li2');
const subHeader = document.querySelector('.sub-header');
const gnbMainUl = document.querySelector('.gnb.main>ul');
const gnbMainLi = document.querySelectorAll('.gnb.main>ul>li');
const gnbSubUl = document.querySelector('.gnb.sub>ul');
const gnbSubLi = document.querySelectorAll('.gnb.sub>ul>li');

//header > h1.title >>>left
window.addEventListener('scroll', (e) => {
    e.preventDefault();
    let topWin = document.documentElement.scrollTop;
    gnbMainLi.forEach((el) => {
        el.style.color = 'transparent';
    });
    if (topWin >= 100) {
        innerHeader.classList.add('go-left');
    };
    // console.log(topWin)
    gnbSubLi.forEach((el, idx) => {
        const section = document.querySelectorAll('.section');
        let setTop0 = topWin;
        let setTop1 = section[1].offsetTop - 2;
        let setTop2 = section[2].offsetTop - 2;
        // console.log(setTop2);
        let dif = section[1].offsetTop - section[0].offsetTop;
        if (topWin >= 0 && topWin < setTop1) {
            gnbSubLi[0].style.color = 'rgb(56, 56, 56)';
        } else {
            el.style.color = 'rgba(87, 86, 86, 0.6)';
        };
        if (topWin >= setTop1 && topWin < setTop2) {
            gnbSubLi[1].style.color = 'rgb(56, 56, 56)';
        } else {
            el.style.color = 'rgba(87, 86, 86, 0.6)';
        };
        if (topWin >= setTop2) {
            gnbSubLi[2].style.color = 'rgb(56, 56, 56)';
        } else {
            el.style.color = 'rgba(87, 86, 86, 0.6)';
        };
    });
    return false;
});

//sub-header >>out
dotMenu.addEventListener('click', (e) => {
    subHeader.classList.toggle('go-out');
    dotMenu.classList.toggle('rotate');
    dotMenuLi1[0].classList.toggle('trans1');
    dotMenuLi1[1].classList.toggle('trans1');
    dotMenuLi2.classList.toggle('trans2');
    e.stopPropagation();
});

//gnb >>scroll
const section = document.querySelectorAll('.section');

gnbMainUl.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return false;
    };
    gnbMainLi.forEach((el, idx) => {
        gnbSubLi.forEach((el) => {
            el.style.color = 'transparent';
        });
        if (el === e.target) {
            let setTop = section[idx].offsetTop;
            el.style.color = 'rgb(56, 56, 56)';
            e.preventDefault();
            if (idx == 0) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                window.scroll({
                    top: setTop,
                    left: 0,
                    behavior: "auto"
                });
            };
        } else {
            el.style.color = 'rgba(87, 86, 86, 0.6)';
        };
        e.preventDefault();
        return false;
    });
});