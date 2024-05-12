const image3rdSlide = [
  './vanh/z5433335896992_27d2bc8d40588f39e7144a05ac0c4a95.jpg',
  './vanh/z5433375113385_55e9c27c5c0130e55ff17b817c489b48.jpg',
  './vanh/z5433375114504_fe99280cb50e27a3c3fe0d71ea0650a4.jpg',
  './vanh/z5433375119031_dbf69ac705df850979f8e41970d4d477.jpg',
  './vanh/z5433375122429_c7040e3584793eb6bbeb6919204133d5.jpg'
]

const lengthOf3rdSlide = image3rdSlide.length;
const refslide3image = document.querySelector('.slide3rd_image');
let index_slide_3rd = 1;

const timer_for_3rd_slide = setInterval(() => {
  refslide3image.src = image3rdSlide[index_slide_3rd];
  refslide3image.style.animation = 'frierenSlideShow'
  index_slide_3rd = index_slide_3rd >= lengthOf3rdSlide - 1 ? 0 : index_slide_3rd += 1;
}, 2000);
// vanh\z5433375119031_dbf69ac705df850979f8e41970d4d477.jpg
// vanh\z5433375122429_c7040e3584793eb6bbeb6919204133d5.jpg