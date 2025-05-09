const images = document.querySelectorAll("#slider img");
let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");

  // 动态切换模板样式
  const type = images[index].dataset.type;
  slider.className = type;
}, 5000);
