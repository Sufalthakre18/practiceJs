let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayguess(guess);
            displaymessage(`Game Over. Random Number was ${randomNum}`);
            endgame();
        } else {
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displaymessage('You guessed it right!');
        endgame();
    } else if (guess < randomNum) {
        displaymessage('Number is too low');
    } else if (guess > randomNum) {
        displaymessage('Number is too high');
    }
}

function displayguess(guess) {
    userinput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    if (!document.querySelector('#newGame')) {
        startOver.appendChild(p);
    }
    newgame();
}

function newgame() {
    const newGamebutt = document.querySelector('#newGame');
    newGamebutt.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        playgame = true;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
        startOver.removeChild(p);
    });
}
