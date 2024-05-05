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

function nextPage() {
  slideIndex < children_element - 1 ? slideIndex++ : slideIndex;

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
  show_slide[slideIndex].style.right = '0%';
  show_slide[slideIndex].style.animation = 'nextSlide .5s ease-in-out';
  show_slide[slideIndex - 1].style.animation = 'nextSlidePre .5s ease-in-out';

  dots[slideIndex].style.width = dots_width_trans;
  dots[slideIndex].style.background = '#96ffb2';
  dots[slideIndex - 1].style.width = dots_width;
  dots[slideIndex - 1].style.background = '#FCFFE0';
}

function prePage() {
  show_slide[slideIndex].style.right = '-100%';
  show_slide[slideIndex].style.animation = 'preSlide .5s ease-in-out';
  dots[slideIndex].style.background = '#FCFFE0';
  dots[slideIndex].style.width = dots_width;
  slideIndex > 0 ? slideIndex-- : slideIndex;

  if (slideIndex === 0) {
    pre_button.disabled = true;
    pre_button.style.visibility = 'hidden';
  } else {
    pre_button.disabled = false;
    pre_button.style.visibility = 'visible';
    next_button.disabled = false;
    next_button.style.visibility = 'visible';
  }

  show_slide[slideIndex].style.animation = 'preSlideNext .5s ease-in-out';
  dots[slideIndex].style.width = dots_width_trans;
  dots[slideIndex].style.background = '#96ffb2';
}


next_button.addEventListener('click', () => {
  nextPage();
})

pre_button.addEventListener('click', () => {
  prePage();
})


// key
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    nextPage();
  } else if (event.code === 'ArrowLeft') {
    prePage();
  }
})

// const background = [
//   '#C3E2C2',
//   '#EAECCC',
//   '#DBCC95',
//   '#CD8D7A',
//   '#C499F3',
//   '#31304D'
// ]

// for (let i = 0; i < background.length; i++) {
//   show_slide[i].style.background = background[i];
// }

const content_button = document.querySelector('.content_button');
content_button.addEventListener('click', () => {
  nextPage();
})

const dots_component = document.querySelector('.process');
const dots_length = dots_component.children.length;
const dots = document.querySelectorAll('.dots');
dots[0].style.width = '2em';
dots[0].style.background = '#96ffb2'
const dots_width = '0.7em';
const dots_width_trans = '2em';