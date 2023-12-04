const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 0,
  slideToClickedSlide: true,
  mousewheel: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  breakpoints: {
    // when window width is >= 480px
    768: {

         // Optional parameters
  direction: 'horizontal',
  mousewheel: true,
  loop: true,
  slidesPerView: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
    },
}
});