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


// COLLAPSIBLE
$(document).ready(function(){
  $('.collapsible').collapsible();
});

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

// DROPDOWN
$('.dropdown-trigger').dropdown({
 
  hover: true, 
  coverTrigger: false,
  constrainWidth:false,
  alignment:"middle"
 
}
);

// TABS
$(document).ready(function(){
  $('.tabs').tabs();
});