const swiper = new Swiper('.slide-wrapper', {

    speed: 400,
    slidesPerView: 3,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        // width >= 1140
        1140 :{
            slidesPerView: 3
        },
        // width >= 735
        735: {
            slidesPerView: 2
        },
        // width >= 0
        0 :{
            slidesPerView: 1,
        }

    }
  });
