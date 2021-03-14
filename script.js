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
const $current0el = document.getElementById('current--0');
const $current1el = document.getElementById('current--1');
const $diceImg = document.querySelector('.dice');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');
const $btnNemGame = document.querySelector('.btn--new');

let playing, scores, activePlayer, currentScore;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  $player0el.classList.toggle('player--active');
  $player1el.classList.toggle('player--active');
};

const init = () => {
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  $score0el.textContent = 0;
  $score1el.textContent = 0;
  $current0el.textContent = 0;
  $current1el.textContent = 0;
  $diceImg.classList.add('hidden');
  $player0el.classList.remove('player--winner');
  $player1el.classList.remove('player--winner');
  $player0el.classList.add('player--active');
  $player1el.classList.remove('player--active');
};
init();

$btnRoll.addEventListener('click', function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6 + 1);
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
  }
});

$btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      $diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

$btnNemGame.addEventListener('click', init);
