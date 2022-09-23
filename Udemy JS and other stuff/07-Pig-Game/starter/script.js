'use strict';
//Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};
//NEW GAME !!!

//Rolling the dice function

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate  a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Displaying the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add dice to Current player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      //Player switch
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active players score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if platyers score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceElement.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //switch to the next palyer
      switchPlayer();
    }
  }
});
// Initializing starting scores
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player1Element.classList.add('player--active');
  player0Element.classList.remove('player--active');
  //   document.getElementsByClassName('current-score').value = '0';
};
btnNew.addEventListener('click', init);

init();
