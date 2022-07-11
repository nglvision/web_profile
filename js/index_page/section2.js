'use strict';

const folio1Li = document.querySelectorAll('.folio-con1>ul>li');
const folio2Li = document.querySelectorAll('.folio-con2>ul>li');
const folioSpan = document.querySelectorAll('.folio-con1>ul>li span');

folio1Li.forEach((el1, idx) => {
    el1.addEventListener('click', (e) => {
        folio2Li.forEach((el2, idx2) => {
            const folio2LiClass = el2.className;
            const newClass = folio2LiClass.split(' ');
            el2.classList.remove('go-left');
            newClass.forEach((el3, idx3) => {
                if (idx == el3) {
                    el2.classList.add('go-left');
                    folioSpan.forEach((el4, idx4) => {
                        if (idx === idx4) {
                            el4.classList.add('on');
                        } else {
                            el4.classList.remove('on');
                        };
                    });
                };
            });
        });
    });
});