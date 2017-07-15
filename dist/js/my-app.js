var app = new Framework7({
    pushState: true,
    swipePanel: 'left',
    domCache: true
});

var $$ = Dom7;

//下拉弹窗
$$('.open-plus').on('click', function () {
    var clickedPlus = this;
    app.popover('.popover-links', clickedPlus);
})

//轮播图
var mySwiper3 = app.swiper('.swiper-3', {
    pagination: '.swiper-3 .swiper-pagination',
    spaceBetween: 10,
    slidesPerView: 3
});

$$('.open-login-screen').on('click', function () {
    app.loginScreen();
})

$('.register_btn').click(function () {
    var mainView = app.addView('.view');
    mainView.router.loadPage('../register.html');
})