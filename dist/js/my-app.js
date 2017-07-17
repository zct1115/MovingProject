var app = new Framework7({
    pushState: true,
    swipePanel: 'left',
    // hideNavbarOnPageScroll: true
});

var $$ = Dom7;

var mainView = app.addView('.view-main', {
    // dynamicNavbar: true
})

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

$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    // if (page.name == 'user_detail')
    // Following code will be executed for page with data-page attribute equal to "about"

})
