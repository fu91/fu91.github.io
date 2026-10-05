//読み込み時のアニメーション
$(function () {
  // 一旦hide()で隠してフェードインさせる
  $(".all-container").hide().fadeIn("slow");
});

// $(function () {
//   $(".swiper-container").each(function () {
//     let slides = $(this).find("img");
//     let slideCount = slides.length;
//     let currentIndex = 0;

//     slides.eq(currentIndex).fadeIn();
//     setInterval(showNextSlide, 6000);
//     function showNextSlide() {
//       let nextIndex = (currentIndex + 1) % slideCount;
//       slides.eq(currentIndex).fadeOut();
//       slides.eq(nextIndex).fadeIn();
//       currentIndex = nextIndex;
//     }
//   });
// });
