/////スクロール/////

$(function () {
    $('#menu_nav_gallery').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({
            scrollTop: position
        }, '500')
    })
})

///トップへ戻るボタン/////
$(function () {
    var topBtn = $('#top_return_bt');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});