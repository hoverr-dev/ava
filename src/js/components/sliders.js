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
    modules: [Navigation, Pagination, Keyboard],
  });
}