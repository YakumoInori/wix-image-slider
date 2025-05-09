const images = document.querySelectorAll("#slider img");
const slider = document.getElementById("slider");
let index = 0;

function updateSlider() {
  images.forEach(img => img.classList.remove('active'));

  images[index].classList.add('active');

  const type = images[index].dataset.type;
  slider.className = `slider ${type}`;
  
  index = (index + 1) % images.length;
}

setInterval(updateSlider, 5000); // 每5秒自动轮播一次
window.onload = updateSlider; // 确保加载后立即执行一次
