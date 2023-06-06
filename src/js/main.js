let btn = $('.first-screen__btn');
let title = $('.first-screen__title');
let subtitle = $('.first-screen__subtitle')
//console.log(btn, title)

//при клике на кнопку
btn.on('click', function () {
   title.toggleClass('first-screen__title_active')
   subtitle.toggleClass('active')

});

btn.on('mouseover', function () {
   btn.css('background-color', 'red')
});

btn.on('mouseout', function () {
   btn.css('background-color', 'transparent')
});
