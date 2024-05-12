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
  if (slideIndex - 1 < 0) return;
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
// document.addEventListener('keydown', (event) => {
//   if (event.code === 'ArrowRight') {
//     nextPage();
//   } else if (event.code === 'ArrowLeft') {
//     prePage();
//   }
// })

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

const thoi_nen = document.querySelector('.turnoff');
thoi_nen.addEventListener('click', () => {
  const fire = document.querySelectorAll('.fire');
  for (let i in fire) {
    fire[i].style.visibility = 'hidden';
  }
})

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

// 

const confirm = document.getElementById('confirm');
confirm.addEventListener('click', (event) => {
  event.preventDefault();

  // console.log(expand_lock);
  confirm.innerHTML = 'Không thể nhập hoặc chỉnh sửa';
  confirm.id = 'confirm_dis';
  confirm.disabled = true;
  expand_lock = false;
  const turnoff = {
    open: false
  }

  axios.put('https://vercel-sever-9gh4.vercel.app/lockeds', turnoff).then(res => console.log('Da cap nhat du lieu:', res.data)).catch(err => console.log('Loi khi cap nhat du lieu:', err));

  const your_dream_text = document.getElementById('yourDream').value;
  document.getElementById('yourDream').disabled = true;

  const data = {
    text: your_dream_text
  }

  axios.post('https://vercel-sever-9gh4.vercel.app/your_dream', data).then(() => {
    console.log('Gửi dữ liệu thành công:', data);
  }).catch(error => console.log('Can not sent data:', error));
})

// Khoa/mo uoc nguyen
let lock;
let expand_lock;
// https://vercel-sever-9gh4.vercel.app/your_dream
axios.get('https://vercel-sever-9gh4.vercel.app/lockeds')
  .then(respone => {
    // console.log(respone.data);
    lock = respone.data;
    // console.log(lock);
    // console.log(lock.open);
    if (lock.open) {
      confirm.disabled = false;
    } else {
      confirm.disabled = true;
      confirm.innerHTML = 'Không thể nhập hoặc chỉnh sửa';
      confirm.id = 'confirm_dis';
      document.getElementById('yourDream').disabled = true;
      document.getElementById('yourDream').placeholder = 'Hãy đợi ngày này năm sau nhé!'
    }

    expand_lock = lock.open;
  })
  .catch(error => {
    console.log('Khong the lay duoc du lieu:', error);
  })



// console.log(lock);