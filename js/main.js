//  SIDENAV TRIGGER
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// CAROUSEL TRIGGER
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

// TOOLTIP 
$(document).ready(function(){
  $('.tooltipped').tooltip();
});

// AOS
AOS.init();
