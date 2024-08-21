import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instSecondSlider = () => {
  const slider = document.querySelector('.process-splide');

  if (slider) {
    const options = {
      type: 'slide',
      speed: 1000,
      pagination: false,
      updateOnMove: true,
      perPage: 2,
      perMove: 1,
      gap: '1.88rem',
      breakpoints: {
        960: {
          perPage: 2,
          perMove: 1,
          gap: '1rem',
        },
        760: {
          arrows: false,
          pagination: true,
          perPage: 1,
        },
      },
    };

    new Splide(slider, options).mount();
  }

  // arrowsClicker();
};
instSecondSlider();

// function arrowsClicker() {
//   const arrows = document.querySelectorAll('.reviews-arrow');
//   const container = document.querySelector('.reviews__box');

//   arrows?.forEach(arrow => {
//     arrow.addEventListener('click', e => {
//       const target = e.currentTarget;

//       if (target.classList.contains('reviews-next')) {
//         container.querySelector('.splide__arrow--next').click();
//       } else {
//         container.querySelector('.splide__arrow--prev').click();
//       }
//     });
//   });
// }
