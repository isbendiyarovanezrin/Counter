"use strict";

const buttons = document.querySelectorAll(".btn");
const counter = document.getElementById("counter");
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("prevBtn")) {
      count--;
    } else if (button.classList.contains("nextBtn")) {
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
