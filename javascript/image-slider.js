const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



});