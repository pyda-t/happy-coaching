import { isWebp } from './modules/isWebp.js';

isWebp();

const body = document.body;
const burger = body.querySelector('.header__burger');
const menu = body.querySelector('.header__right');
const animTexts = body.querySelectorAll('.anim-text');
const animImages = body.querySelectorAll('.anim-image');
const animCards = body.querySelectorAll('.anim-card');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__right--active');
});

const createObserver = (className) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;

        target.classList.add(`${className}--active`);
        observer.unobserve(target);
      };
    });
  }, {
    rootMargin: '-50px',
  });
};

animTexts.forEach(animText => createObserver('anim-text').observe(animText));
animImages.forEach(animImage => createObserver('anim-image').observe(animImage));
animCards.forEach(animCard => createObserver('anim-card').observe(animCard));
