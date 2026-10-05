// ハンバーガー
$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.header_globalMenu').addClass('active');
        } else {
            $('.header_globalMenu').removeClass('active');
        }
    });
});
