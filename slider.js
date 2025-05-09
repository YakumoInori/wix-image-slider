const images = document.querySelectorAll("#slider img");
let index = 0;
const total = images.length;
const delay = 5000;

function applyTypeStyle(img) {
  const type = img.dataset.type;

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
    img.style.width = "auto";
    img.style.height = "100%";
    img.style.left = "50%";
    img.style.top = "0";
    img.style.transform = "translateX(-50%)";
  }
}

// ✅ 初始化
images.forEach(img => img.classList.remove("active"));
images[0].classList.add("active");
applyTypeStyle(images[0]);

// ✅ 循环切换
setInterval(() => {
  images[index].classList.remove("active");

  index = (index + 1) % total;

  images[index].classList.add("active");
  applyTypeStyle(images[index]);
}, delay);

