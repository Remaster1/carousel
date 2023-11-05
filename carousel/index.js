const left = document.getElementById("left");
const right = document.getElementById("right");
const carusel = document.getElementById("carusel");
const caruselElem = 3;
const width = 100 / caruselElem;
const item = carusel.children.length - caruselElem;
let current = 0;

let clickLeft = () => {
  current -= 1;
  if (current >= 0) {
    carusel.style.transform = `translateX(-${width * current}%)`;
  } else {
    current = 0;
  }
};

let clickRight = () => {
  current += 1;
  if (current <= item) {
    carusel.style.transform = `translateX(-${width * current}%)`;
  } else {
    current = item;
  }
};

left.addEventListener("click", clickLeft);
right.addEventListener("click", clickRight);

for (let i = 0; i < carusel.childElementCount; i++) {
  carusel.children[i].style.maxWidth = width + "%";
}
