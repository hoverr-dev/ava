import Swiper, { Navigation, Pagination, Keyboard } from 'swiper';
export function slider() {
  const teamSlider = new Swiper('.team-slider', {
    slidesPerView: 3.1526,
    slidesPerGroup: 3,
    loop: false,
    spaceBetween: 18,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2.5,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 2.29,
        slidesPerGroup: 2
      }
    },
    modules: [Navigation, Pagination, Keyboard],
  });
}