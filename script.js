const buttons = document.querySelectorAll(".progress__btn");
const progressBar = document.querySelector("#progress-bar");
const circles = document.querySelectorAll("progress__cirlce");

let currentCircle = 1;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "next") {
      currentCircle++;
      if (currentCircle > circles.length) {
        currentCircle = circles.length;
      }

      progressBar.style.width = "25% ";
      console.log(progressBar.style.backgroundSize);
    }
  });

  // if(button.id)
});
