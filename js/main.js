$(document).ready(function() {
  $('.main__header--burger').on('click', function() {
    $('.main__header--menu').toggleClass('main__header--menu-active');
  });
  $('.main__header--close').on('click', function() {
    $('.main__header--menu').toggleClass('main__header--menu-active');
  });
    $("a.portfolio__item--box").fancybox({
    loop: true,
    buttons: [
    "slideShow",
    "download",
    "close"  ],
    transitionEffect: "circular",
  });
});

$(document).mouseup(function (e) {
    var container = $(".main__header--menu-active");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.toggleClass('main__header--menu-active');
  }
});

$(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
  $('.scroll-up').fadeIn();
    } else {
  $('.scroll-up').fadeOut();
    }
});
$('.scroll-up').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });
});
