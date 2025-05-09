const images = document.querySelectorAll("#slider img");
let index = 0;

const slider = document.getElementById("slider");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");

  // ⚠️ 修复点：保留原始 slider 类名
  const type = images[index].dataset.type;
  slider.className = `slider ${type}`;
}, 5000);
