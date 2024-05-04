const next_button = document.querySelector('.forward');
const pre_button = document.querySelector('.back');

const children_element = document.querySelector('.main').children.length;
let slide = [];
for (let i = 0; i < children_element; i++) {
  slide.push(i);
}
let slideIndex = 0;

next_button.addEventListener('click', () => {
  

  console.log(slideIndex)
})

pre_button.addEventListener('click', () => {
  
  
  console.log(slideIndex);
})