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

//发现标签页ajax加载
$$('#tab2').on('tab:show', function () {
    app.addView('#tab2').router.loadPage('find.html');
})

//通讯录标签页ajax加载
// $$('#tab3').on('tab:show', function () {
//     app.addView('#tab3').router.loadPage('communicate.html');
// })

$$('#tab4').on('tab:show', function () {
    app.addView('#tab4').router.loadPage('myInfo.html');
})

$$('.open-login-screen').on('click', function () {
    app.loginScreen();
})