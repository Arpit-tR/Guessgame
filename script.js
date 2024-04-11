'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess <= 20) {
    // when there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔ No Number';
      displayMessage('⛔ No Number');

      // when right guess
    } else if (guess === number) {
      // document.querySelector('.message').textContent = '🎉 corrent number!';
      displayMessage('🎉 corrent number!');
      document.querySelector('body').style.backgroundColor = '#47ffb6';
      document.querySelector('.number').style.width = '50rem';
      document.querySelector('.number').style.fontSize = '10rem';
      document.querySelector('.number').textContent = number;
      if (highscore <= score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== number) {
      if (score <= 1) {
        // document.querySelector('.message').textContent = '👎 try again';
        displayMessage('👎 try again');
        document.querySelector('.score').textContent = 0;
      } else {
        // document.querySelector('.message').textContent =
        //   guess < number ? '📉 too lower' : '📈 too High';

        displayMessage(guess < number ? '📉 too lower' : '📈 too High');
        score--;
        document.querySelector('.score').textContent = score;
      }
    }

    // guess lower than number
    // } else if (guess < number) {
    //   if (score <= 1) {
    //     document.querySelector('.message').textContent = '👎 try again';
    //     document.querySelector('.score').textContent = 0;
    //   } else {
    //     document.querySelector('.message').textContent = '📉 too lower';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   }
    //   //guess higher than number
    // } else if (guess > number) {
    //   if (score <= 1) {
    //     document.querySelector('.message').textContent = '👎 try again';
    //     document.querySelector('.score').textContent = 0;
    //   } else {
    //     document.querySelector('.message').textContent = '📈 too High';
    //     document.querySelector('.score').textContent = score;
    //     score--;
    //   }
  } else {
    // document.querySelector('.message').textContent = 'Greater than 20 ';
    displayMessage('Greater than 20');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#315374';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.fontSize = '7rem';
  // document.querySelector('.highscore').textContent = highscore;
});
