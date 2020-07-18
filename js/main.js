//  SIDENAV TRIGGER
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// CAROUSEL TRIGGER
// $(".carousel.carousel-slider").carousel({
//   fullWidth: true,
//   indicators: true,
// });

// AOS
AOS.init();

// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true,
//     padding: 200
//   }, setTimeout(autoplay, 4500));

//   function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
//   }

$(".carousel.carousel-slider").carousel({ fullWidth: true, indicators: true });
var autoplay = true;
setInterval(function () {
  if (autoplay) $(".carousel.carousel-slider").carousel("next");
}, 4500);
$(".carousel.carousel-slider").hover(
  function () {
    autoplay = false;
  },
  function () {
    autoplay = true;
  }
);
