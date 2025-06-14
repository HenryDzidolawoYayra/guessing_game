'use-strict';
let score = 20;
const scoreBox = document.querySelector('.score');
scoreBox.textContent = score;

let highScore = 0;
const highScoreBox = document.querySelector('.highscore');
highScoreBox.textContent = highScore;


let secretNumber = Math.trunc((Math.random() * 20)+1);
console.log(secretNumber);
const userInput = document.querySelector('.guess');

const checkButton = document.querySelector('.check');


checkButton.addEventListener('click', function() {
    const userGuess = Number(userInput.value);
    // console.log(userGuess);

    if (score>0) {
           if (userGuess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').innerHTML = '🎉Correct Number';
        document.querySelector('.number').innerHTML = secretNumber;
        highScore=+1;
        highScoreBox.textContent = highScore;
        secretNumber = Math.trunc((Math.random() * 20)+1);
        console.log(secretNumber);
    } else if (userGuess > secretNumber) {
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.message').innerHTML = '✅Too High';
        score--;
        scoreBox.textContent = score;

        if(score === 0) {
        document.querySelector('.gameOver').innerText = '🥺Game Over!!!'
    }
    } else if (userGuess < secretNumber) {
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.message').innerHTML = '✅Too Low';
        score--;
        scoreBox.textContent = score;
        if(score === 0) {
        document.querySelector('.gameOver').innerText = '🥺Game Over!!!'
    }
    } } else if(score === 0) {
        document.querySelector('.gameOver').innerText = '🥺Game Over!!!'
    }
});


// console.log(Math.trunc((Math.random() * 20)+1));