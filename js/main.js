const swiper = new Swiper('.main-slider', {
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.main-slider__arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

const burger = document.querySelector('.menu-burger');
const closeMenu = document.querySelector('.header__close-menu');
const menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

const modalWindow = document.querySelector('.modal');
const buttonPaly = document.querySelector('.main__button-play');

buttonPaly.addEventListener('click', () => {
  modalWindow.classList.add('active');
});
modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
});
