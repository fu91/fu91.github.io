//読み込み時のアニメーション
$(function () {
  // 一旦hide()で隠してフェードインさせる
  $(".all-container").hide().fadeIn("slow");
});

//ハンバーガー
$(
  (function () {
    $(".hamburger").on("click", function () {
      $(".g-navi").toggleClass("is-active");
      $(".hamburger").toggleClass("is-active");
    });
  })()
);
//スライダー
$(function () {
  $(".main-img").each(function () {
    let slides = $(this).find("img"); // .slideshow下のimg、すなわちすべてのスライドが変数slidesに代入される
    let slideCount = slides.length; // スライドの数
    let currentIndex = 0; // 現在のスライドを示すインデックス

    // 1 番目のスライドをフェードインで表示
    slides.eq(currentIndex).fadeIn();

    //ミリ秒ごとに showNextSlide 関数を実行
    setInterval(showNextSlide, 5000);

    // 次のスライドを表示する関数
    function showNextSlide() {
      // 次に表示するスライドのインデックス
      // (もし最後のスライドなら最初に戻る)=>スライド数で割り切れたら0になるので初期化
      let nextIndex = (currentIndex + 1) % slideCount;

      // 現在のスライドをフェードアウト
      slides.eq(currentIndex).fadeOut();

      // 次のスライドをフェードイン
      slides.eq(nextIndex).fadeIn();

      // 現在のスライドのインデックスを更新
      currentIndex = nextIndex;
    }
  });
});
