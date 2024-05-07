const image3rdSlide = [
  'https://i.pinimg.com/564x/7e/d0/53/7ed05377f878be6ee63593f5d5e7c565.jpg',
  'https://i.pinimg.com/564x/3d/0e/d3/3d0ed37c45061192214c2e8291e06384.jpg',
  'https://i.pinimg.com/736x/e1/51/00/e1510038f860f4ecbcb00b5a0e3cd8d6.jpg',
  'https://i.pinimg.com/736x/b2/f7/9e/b2f79ec74700756c3c4e6682ea4ef2de.jpg',
  'https://i.pinimg.com/736x/b3/e7/56/b3e75664169f2f2b694dfd8e596f1594.jpg'
]

const lengthOf3rdSlide = image3rdSlide.length;
const refslide3image = document.querySelector('.slide3rd_image');
let index_slide_3rd = 1;

const timer_for_3rd_slide = setInterval(() => {
  refslide3image.src = image3rdSlide[index_slide_3rd];
  refslide3image.style.animation = 'frierenSlideShow'
  index_slide_3rd = index_slide_3rd >= lengthOf3rdSlide - 1 ? 0 : index_slide_3rd += 1;
}, 2000);
