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
// const $current0el = document.getElementById('current--0');
// const $current1el = document.getElementById('current--1');
const $diceImg = document.querySelector('.dice');
const $btnRoll = document.querySelector('.btn--roll');

$score0el.textContent = 0;
$score1el.textContent = 0;
$diceImg.classList.add('hidden');

let activeScore = 0;
let sum = 0;

$btnRoll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6 + 1);
  console.log(randomDice);
  if (randomDice > 1) {
    $diceImg.src = `./images/dice-${randomDice}.png`;
    $diceImg.classList.remove('hidden');
    sum += randomDice;
    document.getElementById(`current--${activeScore}`).textContent = sum;
  } else {
    // Switch Player
  }
});
