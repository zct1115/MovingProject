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

    //获取当前初始化页面名称
    var page = e.detail.page;

    if (page.name == 'user_detail') {
        //性别选择
        $$('.open-gender-picker').on('click', function () {
            var buttons1 = [
                {
                    text: '选择性别',
                    label: true
                },
                {
                    text: '男',
                    bold: true
                },
                {
                    text: '女',
                }
            ];
            var buttons2 = [
                {
                    text: '取消',
                    color: 'red'
                }
            ];
            var groups = [buttons1, buttons2];
            app.actions(groups);
        });

        //图片预览
        $$('.avatar-broswer').on('click', function () {
            
        })
    }
})
