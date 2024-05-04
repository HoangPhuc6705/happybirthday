const next_button = document.querySelector('.forward');
const pre_button = document.querySelector('.back');
const show_slide = document.querySelectorAll('.items');

const children_element = document.querySelector('.main').children.length;
let slide = [];
for (let i = 0; i < children_element; i++) {
  slide.push(i);
}
let slideIndex = 0;

if (slideIndex === 0) {
  pre_button.disabled = true;
  pre_button.style.visibility = 'hidden';
  show_slide[slideIndex].style.right = '0%';
}

next_button.addEventListener('click', () => {
  slideIndex < children_element - 1 ? slideIndex++ : slideIndex;
  show_slide[slideIndex].style.right = '0%';
  show_slide[slideIndex].style.animation = 'nextSlide .5s ease-in-out';
  show_slide[slideIndex - 1].style.animation = 'nextSlidePre .5s ease-in-out';

  if (slideIndex === children_element - 1) {
    next_button.disabled = true;
    next_button.style.visibility = 'hidden';
  } else {
    next_button.disabled = false;
    next_button.style.visibility = 'visible'
  }

  if (slideIndex > 0) {
    pre_button.disabled = false;
    pre_button.style.visibility = 'visible';
  }

})

pre_button.addEventListener('click', () => {
  show_slide[slideIndex].style.right = '-100%';
  show_slide[slideIndex].style.animation = 'preSlide .5s ease-in-out';
  slideIndex > 0 ? slideIndex-- : slideIndex;
  show_slide[slideIndex].style.animation = 'preSlideNext .5s ease-in-out';

  if (slideIndex === 0) {
    pre_button.disabled = true;
    pre_button.style.visibility = 'hidden';
  } else {
    pre_button.disabled = false;
    pre_button.style.visibility = 'visible';
    next_button.disabled = false;
    next_button.style.visibility = 'visible';
  }

})

const background = [
  '#C3E2C2',
  '#EAECCC',
  '#DBCC95',
  '#CD8D7A',
  '#C499F3',
  '#31304D'
]

for (let i = 0; i < background.length; i++) {
  show_slide[i].style.background = background[i];
}