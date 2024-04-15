"use strict";

let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let highscore = 0;
let score = 20;

var inputField = document.querySelector(".guess");
inputField.disabled = false;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess <= 20 && guess > 0) {
    // when there is no input
    if (!guess) {
      displayMessage("⛔ No Number");

      // when right guess
    } else if (guess === number) {
      displayMessage("🎉 corrent number!");
      inputField.disabled = true;
      document.querySelector("body").style.backgroundColor = "#47ffb6";
      document.querySelector(".number").style.width = "50rem";
      document.querySelector(".number").style.fontSize = "10rem";
      document.querySelector(".number").textContent = number;
      document.querySelector(".number").style.borderColor = "#000";
      document.querySelector(".number").style.color = "#000";
      document.querySelector(".check").style.backgroundColor = "#eee";
      document.querySelector(".check").style.cursor = "default";
      document.querySelector(".check").textContent = "🎉";
      document.querySelector(".head").style.color = "#000000";
      document.querySelector(".between").style.color = "#000000";
      document.querySelector(".lable-score").style.color = "#000";
      document.querySelector(".lable-highscore").style.color = "#000";
      document.querySelector(".message").style.color = "#000";
      document.querySelector(".guess").style.color = "#000";
      document.querySelector(".guess").style.borderColor = "#000";

      if (highscore <= score) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (guess !== number) {
      if (score <= 1) {
        displayMessage("👎 try again");
        inputField.disabled = true;
        document.querySelector(".check").style.cursor = "default";
        document.querySelector(".check").style.backgroundColor = "#eee";
        document.querySelector(".score").textContent = 0;
      } else {
        displayMessage(guess < number ? "📉 too low" : "📈 too High");
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  } else {
    displayMessage("not in range 1-20");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  inputField.disabled = false;
  displayMessage("Start Guessing...");
  document.querySelector("body").style.backgroundColor = "#3b78b4";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.borderColor = "";
  document.querySelector(".number").style.width = "20rem";
  document.querySelector(".number").style.fontSize = "7rem";
  document.querySelector(".check").style.backgroundColor = "";
  document.querySelector(".check").style.cursor = "pointer";
  document.querySelector(".check").textContent = "Check!";
  document.querySelector(".head").style.color = "";
  document.querySelector(".between").style.color = "";
  document.querySelector(".lable-score").style.color = "";
  document.querySelector(".lable-highscore").style.color = "";
  document.querySelector(".message").style.color = "";
  document.querySelector(".guess").style.color = "";
  document.querySelector(".guess").style.borderColor = "";
  document.querySelector(".guess").value = "";
});
