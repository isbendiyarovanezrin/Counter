"use strict";

const sound = document.getElementById("sound");
const buttons = document.querySelectorAll(".btn");
const counter = document.getElementById("counter");
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prevBtn")) {
      sound.play();
      sound.currentTime = 0.1;
      count--;
    } else if (button.classList.contains("nextBtn")) {
      sound.play();
      sound.currentTime = 0.1;
      count++;
    } else {
      count = 0;
    }

    counter.textContent = count;

    if (count > 0) {
      counter.style.color = "var(--add-count-clr)";
    } else if (count < 0) {
      counter.style.color = "var(--lower-count-clr)";
    } else {
      counter.style.color = "var(--main-black-clr)";
    }
  });
});

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1500);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
