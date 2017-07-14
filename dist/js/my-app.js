var app = new Framework7({
    pushState: true,
    swipePanel: 'left',
});
var $$ = Dom7;

// $$('.open-left-panel').on('click', function (e) {
//     app.openPanel('left');
// })

$$('.open-plus').on('click', function () {
    var clickedPlus = this;
    app.popover('.popover-links', clickedPlus);
})

var mySwiper3 = app.swiper('.swiper-3', {
    pagination: '.swiper-3 .swiper-pagination',
    spaceBetween: 10,
    slidesPerView: 3
});
