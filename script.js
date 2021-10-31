'use strict';
// //console.log(document.querySelector('#hj').textContent); // give the text written in this tag

// document.querySelector('#hj').textContent = 'ankit won'; // set the text written in this tag
// document.querySelector('.number').textContent = String(
//   Math.trunc(Math.random() * 10 + 1)
// );
// document.querySelector('.guess').value = 3;
// console.log(document.querySelector('.guess').value);
var high = 0;
var count = 20;
let rNumber = Math.trunc(Math.random() * 20 + 1);
let inputValue;
var newNumber = function () {
  rNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('#hj').textContent = 'Start guessing.....';
  count = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = '';
  document.querySelector('.guess').value = '';
  inputValue = 0;
};
// var ff = ;

document.querySelector('.again').addEventListener('click', newNumber);
document.querySelector('.check').addEventListener('click', function () {
  console.log(rNumber);
  inputValue = Number(document.querySelector('.guess').value);

  if (inputValue < rNumber) {
    document.querySelector('.message').textContent = 'too low';
    count--;
    document.querySelector('.score').textContent = count;
    document.querySelector('.guess').value = '';
  }
  if (inputValue > rNumber) {
    document.querySelector('.message').textContent = 'too high';
    count--;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = count;
  }
  if (inputValue === rNumber) {
    document.querySelector('.message').textContent = 'WON 🏆';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (high < count) {
      high = count;
      document.querySelector('.highscore').textContent = high;
    }
  }
});
