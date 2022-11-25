'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Teisingas numeris!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 55;

// document.querySelector('.guess').value = 69;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
//GUessing the game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  //   //Highscore
  // NO input
  if (!guess) {
    displayMessage('Something is wrong...');
    //PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.score').textContent = score;
    displayMessage('You Guessed correct my good sir!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // highScore = score;
    // document.querySelector('.highscore').textContent = highScore;
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'LOWER!' : 'Higher!';
      displayMessage(guess > secretNumber ? 'LOWER!' : 'Higher!');
    } else {
      displayMessage('U lost loser!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
