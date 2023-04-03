const images = document.querySelectorAll(".images img");
const card = document.querySelector(".card");
const sides = ["left", "top", "right", "bottom", "center"];

let index = 0,
  sidesIndex = -1,
  intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    document.querySelector("img.active").classList.remove("active");
    images[++index].classList.add("active");
    images[index].style.transformOrigin = sides[sidesIndex++];

    sidesIndex === sides.length - 1 && (sidesIndex = -1);
    index === images.length - 1 && (index = -1);
  }, 3000);
};

card.addEventListener("mouseenter", () => {
  intervalFn();
});

card.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});
