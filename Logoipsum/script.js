let burger = document.getElementById('burger');
let wrapper = document.getElementsByClassName('wrapper');

// Changing of burger's class name and his style "left"
function changeBurger() {
  if (burger.classList.contains('icon-menu')) {
    burger.classList.remove('icon-menu');
    burger.classList.add('icon-menu_active');
    document.getElementsByClassName('header__nav')[0].style.left = '0';
    burger.href = '#menu';

    wrapper[0].style.maxHeight = '100vh';
  } else if (burger.className == 'icon-menu_active') {
    burger.className = 'icon-menu';
    document.getElementsByClassName('header__nav')[0].style.left = '-100%';
    burger.href = '#';
    wrapper[0].style.maxHeight = 'none';
  }
}

burger.addEventListener('click', changeBurger);

// Remove burger button if display size more than 599px and close menu
window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > 768) {
    burger.classList.remove('icon-menu_active');
    burger.classList.add('icon-menu');
    document.getElementsByClassName('header__nav')[0].style.left = '-100%';
    wrapper[0].style.maxHeight = 'none';
    spoiler.style.display = 'none';
    arrow.classList.remove('header__spoiler-link_rotated');
    arrow.classList.add('header__spoiler-link');
  }
});

///////////////////////////////////////

let arrow = document.getElementById('header__spoiler-link');
let spoiler = document.getElementById('spoiler-block');

function changeArrow() {
  if (arrow.classList.contains('header__spoiler-link_rotated')) {
    arrow.classList.remove('header__spoiler-link_rotated');
    arrow.classList.add('header__spoiler-link');
    spoiler.style.display = 'none';
  } else if (arrow.classList.contains('header__spoiler-link')) {
    arrow.classList.remove('header__spoiler-link');
    arrow.classList.add('header__spoiler-link_rotated');
    spoiler.style.display = 'flex';
  }
}

arrow.addEventListener('click', changeArrow);

// SLIDER //

const bigStep = 360; //px
const adaptiveStep = 31.03448; //vw
const littleStep = 238; //px
const prev = document.querySelector('.ourteam__button_prev');
const next = document.querySelector('.ourteam__button_next');
const sliderLine = document.querySelector('.slider__items');
const items = document.querySelectorAll('.slider__item');
let count = 0;

const rollPrev = () => {
  const windowWidth = window.innerWidth;
  let globalStep;
  let opStatus;
  if (windowWidth >= 1160) {
    globalStep = bigStep;
    opStatus = 'big';
  } else if (windowWidth <= 767) {
    globalStep = littleStep;
    opStatus = 'little';
  } else if (windowWidth > 767 && windowWidth < 1160) {
    globalStep = adaptiveStep;
    opStatus = 'adaptive';
  }
  if (opStatus === 'big' || opStatus === 'little')
    sliderLine.style.transform = 'translate(-' + count * globalStep + 'px)';
  if (opStatus === 'adaptive')
    sliderLine.style.transform = 'translate(-' + count * globalStep + 'vw)';
};

const rollNext = () => {
  const windowWidth = window.innerWidth;
  let globalStep;
  let opStatus;
  if (windowWidth >= 1160) {
    globalStep = bigStep;
    opStatus = 'big';
  } else if (windowWidth <= 767) {
    globalStep = littleStep;
    opStatus = 'little';
  } else if (windowWidth > 767 && windowWidth < 1160) {
    globalStep = adaptiveStep;
    opStatus = 'adaptive';
  }
  if (opStatus === 'big' || opStatus === 'little')
    sliderLine.style.transform = 'translate(-' + count * globalStep + 'px)';
  if (opStatus === 'adaptive')
    sliderLine.style.transform = 'translate(-' + count * globalStep + 'vw)';
};

prev.addEventListener('click', () => {
  count--;
  if (count < 0 && window.innerWidth > 767) {
    count = items.length - 3;
  } else if (count < 0 && window.innerWidth <= 767) {
    count = items.length - 1;
  }
  rollPrev();
});
next.addEventListener('click', () => {
  count++;
  if (count >= items.length - 2 && window.innerWidth > 767) {
    count = 0;
  } else if (count >= items.length && window.innerWidth <= 767) {
    count = 0;
  }
  rollNext();
});
