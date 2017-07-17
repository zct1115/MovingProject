var app = new Framework7({
    pushState: true,
    swipePanel: 'left',
    // hideNavbarOnPageScroll: true
});

var $$ = Dom7;

//下拉弹窗
$$('.open-plus').on('click', function () {
    var clickedPlus = this;
    app.popover('.popover-links', clickedPlus);
})

//启动页面轮播
var mySwiper = app.swiper('.swiper-start', {
    speed: 400,
    pagination: '.swiper-start .swiper-pagination'
});

//轮播图
var mySwiper3 = app.swiper('.swiper-3', {
    pagination: '.swiper-3 .swiper-pagination',
    spaceBetween: 10,
    slidesPerView: 3
});

$$('.open-login-screen').on('click', function () {
    app.loginScreen();
})

$$('.user_detail').on('click', function () {
    app.addView('.view').router.loadPage('../user_detail.html')
})