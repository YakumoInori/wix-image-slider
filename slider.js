const images = document.querySelectorAll("#slider img");
let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");

  // ✅ 确保保留 slider 原有类名，避免样式丢失
  const type = images[index].dataset.type;
  slider.className = `slider ${type}`;  // 保留 "slider" 再加类型
}, 5000);
