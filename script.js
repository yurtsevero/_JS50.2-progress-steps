const buttons = document.querySelectorAll(".progress__btn");
const progressBar = document.querySelector("#progress-bar");
const circles = document.querySelectorAll(".progress__circle");

let currentCircle = 1;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "next") {
      currentCircle++;
      if (currentCircle > circles.length) {
        currentCircle = circles.length;
        console.log(currentCircle);
      }
      progress();
    }
  });
});

progress = () => {
  progressBar.style.width =
    ((currentCircle - 1) / (circles.length - 1)) * 100 + "%";
};
