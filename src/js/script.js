$(document).ready(function(){
  $('.main-slider').slick({
    arrows: true,
    slidesToShow: 3,
    vertical: true,
    infinite: false,
    asNavFor: ".info-slider",
    initialSlide: 0,
    focusOnSelect: true
  });

  $('.info-slider').slick({
    arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    fade: true,
    // vertical: true,
    infinite: false,
    asNavFor: ".main-slider",
    initialSlide: 0
  });

  // $('.main-slider__item').click(function(){
  //   $('.main-slider__item').toggleClass('active');
  // });
});