'use strict'
// Константа для проверки почты на валидность
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// Выбираем элемент почты
let but = document.querySelector('.footer__elem__mail');
// Реакция на нажатие кнопки рассылки
but.addEventListener('click', (e)=>
{
    let but_input = document.querySelector('#email');
    let eps = 0;
    // Обработка случая, когда after заезжает на поле ввода (W<700px)
    if (document.documentElement.clientWidth < 700) eps = 30;
    // Если пользователь нажимает на элемент, но левее поля ввода
    // => он нажал на кнопку
    if(e.clientX > but.getBoundingClientRect().left + but.offsetWidth - eps){
        let text = but_input.value;
        // Если адрес введен верно
        if (EMAIL_REGEXP.test(text)) text = `Рассылка подключена! Читайте последние новости FLOAP на своей почте ${text}`;
        else text = 'Адрес электронной почты введен неправильно!';
        // Вывод сообщения
        alert(text);}
    });
//--------------------------------
//Ненужное (письмо себе)
//var link = "mailto:me@example.com" + "?cc=myCCaddress@example.com" + "&subject=" + encodeURIComponent("This is my subject") + "&body=" + encodeURIComponent(text);
//window.location.href = link;