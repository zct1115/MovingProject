$(document).ready(function () {

    //填充‘通讯’标签页的标签
    var fillColor = function (btn) {
        var tabs = $('.jsMsgTabBtn');

        tabs.css('background-color', '#fff');
        tabs.css('color', '#2196f3');
        tabs.css('border', '1px solid #2196f3');

        $(btn).css('background-color', '#2196f3');
        $(btn).css('color', '#fff');
    }

    //点击‘通讯’标签页时候，默认填充第一个标签
    $('.tab3').click(function () {
        fillColor($('.jsMsgTabBtn').first());
    })

    //点击不同的标签页，渲染
    $('.jsMsgTabBtn').click(function () {
        fillColor(this)
    })

    //搜索栏点击，遮罩展开，输入栏及其组件浮现
    $('.jsSearch').on('focus', function () {
        $('.searchbar-overlay').css('opacity', 1);
        $('.searchbar-input').css('z-index', 100000000);

        $('.searchbar-clear').css('z-index', 100000000);
        $('.searchbar-clear').css('opacity', 1);

    })

    //输入框失焦
    $('.jsSearch').on('blur', function () {
        $('.searchbar-overlay').css('opacity', 0);
        $('.jsSearch').css('z-index', 0);

        $('.searchbar-clear').css('z-index', 0);
        $('.searchbar-clear').css('opacity', 0);
    })

    /**
     * 若用户选择捐书，隐藏下面的租金输入。
     * 否则显示租金输入
     */
    $('#donateOrShared').change(function () {
        var checkValue = $('#donateOrShared').val();
        if (checkValue == 'donate') {
            $('.jsHideOnShared').css('display', 'none')

        } else {
            $('.jsHideOnShared').css('display', 'block')

        }
    })


    /**
     * 点击匿名隐藏名字输入
     */
    $('#isAnonymous').change(function () {
        var checkValue = $('#isAnonymous').val();
        if (checkValue == 'anonymous') {
            $('.jsUserName').css('display', 'none')
        } else {
            $('.jsUserName').css('display', 'block')
        }
    })
})