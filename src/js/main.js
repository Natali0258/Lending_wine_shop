let btn = $('.first-screen__btn');
let title = $('.first-screen__title');
let subtitle = $('.first-screen__subtitle')

//при клике на кнопку
btn.on('click', function () {
   title.toggleClass('first-screen__title_active')
   subtitle.toggleClass('active')

});

btn.on('mouseover', function () {
   btn.css('background-color', '#8A8A8A')
});

btn.on('mouseout', function () {
   btn.css('background-color', 'transparent')
});

//управление бургер-меню:
let burger = $('.burger');
let navigation = $('.header__nav');
let dublicate = $('.header__title_dublicate');

burger.on('click', function () {
   burger.toggleClass('burger_active')
   navigation.toggleClass('header__nav_active')
   dublicate.toggleClass('header__title_dublicate_active')
})

