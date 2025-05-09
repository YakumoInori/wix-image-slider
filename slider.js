const images = document.querySelectorAll("#slider img");
let index = 0;
const interval = 5000;

function applyTypeStyle(img) {
  const type = img.dataset.type;

  // 重置所有内联样式
  img.style.objectFit = "";
  img.style.width = "";
  img.style.height = "";
  img.style.top = "";
  img.style.left = "";
  img.style.transform = "";

  if (type === "wide") {
    img.style.objectFit = "cover";
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.top = "50%";
    img.style.left = "0";
    img.style.transform = "translateY(-50%)";
  } else {
    img.style.objectFit = "contain";
    img.style.height = "100%";
    img.style.width = "auto";
    img.style.left = "50%";
    img.style.top = "0";
    img.style.transform = "translateX(-50%)";
  }
}

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");

  // ✅ 强制刷新样式
  applyTypeStyle(images[index]);
}, interval);

// ✅ 初始化第一张图的样式
applyTypeStyle(images[0]);
