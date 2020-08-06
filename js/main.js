$(function () {

   $(".box-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });
   $(".products__item-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   $(".slider-week__box").slick({
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      nextArrow: '<button class="slick-arrow slick-slider-next"></button>',
      prevArrow: '<button class="slick-arrow slick-slider-prev"></button>'

   });

   $(".slider-feed__box").slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 2,

      nextArrow: '<button class="slick-arrow slick-slider-next"></button>',
      prevArrow: '<button class="slick-arrow slick-slider-prev"></button>'

   });

});