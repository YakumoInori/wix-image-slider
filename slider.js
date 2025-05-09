const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let index = 0;
const delay = 5000;

function applyStyle(img) {
  const type = img.dataset.type;
  if (type === 'normal') {
    img.style.objectFit = 'contain';
    img.style.background = '#000'; // optional
  } else {
    img.style.objectFit = 'cover';
    img.style.background = '#000'; // optional
  }
}

images.forEach(applyStyle);

function slideTo(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
  applyStyle(images[index]);
}

setInterval(() => {
  index = (index + 1) % images.length;
  slideTo(index);
}, delay);

