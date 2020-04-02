let burger = $('.burger'),
    wrapMenu = $('.menu__wrap'),
    menu = $('.header__menu');

burger.click(() => {
   burger.toggleClass('active');

   if (!wrapMenu.hasClass('hide')) {    
    wrapMenu.css("opacity", '0');
    //wrapMenu.toggleClass('fadeOut'); //Скрывает
    //wrapMenu.toggleClass('fadeIn'); //Скрывает
    setTimeout(() => {wrapMenu.toggleClass('hide');}, 430);    
    menu.toggleClass('_translate300');
   }
   else {
    wrapMenu.toggleClass('hide'); //Открывает
    wrapMenu.css("opacity", '1');
    //wrapMenu.toggleClass('fadeIn');
    //wrapMenu.toggleClass('fadeOut');
    
    setTimeout(() => {menu.toggleClass('_translate300');}, 10);    
   }
})