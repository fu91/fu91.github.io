// gallery_moreBtn

var show = 9; //最初に表示する件数
var num = 9;  //もっと見るで表示する件数
var contents = '.list li'; // 対象のlist
$(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
$('.moreBtn').on('click', function () {
    $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
    if ($(contents + '.is-hidden').length == 0) {
        $('.moreBtn').fadeOut();
    }
});
