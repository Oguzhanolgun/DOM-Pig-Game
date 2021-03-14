'use strict';
/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
const $score0el = document.getElementById('score--0');
const $score1el = document.getElementById('score--1');
const $player0el = document.querySelector('.player--0');
const $player1el = document.querySelector('.player--1');
const $diceImg = document.querySelector('.dice');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');

$score0el.textContent = 0;
$score1el.textContent = 0;
$diceImg.classList.add('hidden');

const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  $player0el.classList.toggle('player--active');
  $player1el.classList.toggle('player--active');
};

$btnRoll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6 + 1);
  console.log(randomDice);
  if (randomDice > 1) {
    $diceImg.src = `./images/dice-${randomDice}.png`;
    $diceImg.classList.remove('hidden');
    currentScore += randomDice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // Switch Player
    switchPlayer();
  }
});

$btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  console.log('currentScore', currentScore);
  console.log('score[activePlayer]', scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    $diceImg.style.display = 'hidden';
  } else {
    switchPlayer();
  }
});
