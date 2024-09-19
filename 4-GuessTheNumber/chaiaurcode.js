const RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('#resultParas');
const remaining = document.querySelector('.remainingGuesses');

const p = document.createElement('p');

let prevGuess = []; //value submission by user

let numGuess = 1; //initiation of number of guesses

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    //console.log(prevGuess);
    if (numGuess === 11) {
      displayGuess(guess);
      alert('Game over!!, you have reached the maximum limit');
      EndGame();
    } else {
    }
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === RandomNumber) {
    displayMessage('you guess it right ');
    EndGame();
  } else if (guess > RandomNumber) {
    displayMessage('number is high');
  } else if (guess < RandomNumber) {
    displayMessage('number is low');
  }
}

function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function EndGame(message) {
  //
}

function NewGame(message) {
  //
}
