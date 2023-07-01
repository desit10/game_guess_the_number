'use strict';

const RandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayGuessMessage = message => {
  document.querySelector('.guess-message').textContent = message;
};

const bodyBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const questionWidth = width => {
  document.querySelector('.question').style.width = width;
};

const questionTextContent = text => {
  document.querySelector('.question').textContent = text;
};

const scoreTextContent = text => {
  document.querySelector('.score').textContent = text;
};

const highscoreTextContent = text => {
  document.querySelector('.label-highscore').textContent = text;
};

let highscore = 0;
let score = 20;
let secretNumber = RandomNumber();

// document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.number-input').value);

  // No input
  if (!guessNumber) {
    displayGuessMessage('Введите число!');
  }

  // Player won
  if (guessNumber === secretNumber) {
    bodyBackgroundColor('lime');
    questionWidth('50rem');
    questionTextContent(secretNumber);
    displayGuessMessage('ПРАВИЛЬНО!!!');
    highscoreTextContent('Лучший результат: ' + score);
    if (highscore < score) {
      highscore = score;
    }
  }

  if (score > 0) {
    // Too high
    if (guessNumber > secretNumber) {
      displayGuessMessage('Слишком много!');
      score--;
    }

    // Too low
    if (guessNumber < secretNumber) {
      displayGuessMessage('Слишком мало!');
      score--;
    }

    scoreTextContent(score);
  }

  // Player
  if (score == 0) {
    bodyBackgroundColor('red');
    displayGuessMessage('ИГРА ОКОНЧЕНА!!!');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = RandomNumber();

  // document.querySelector('.question').textContent = secretNumber;

  bodyBackgroundColor('rgb(0, 0, 0)');
  questionWidth('25rem');
  questionTextContent('???');
  document.querySelector('.number-input').value = null;
  displayGuessMessage('Начни угадывать!');
  scoreTextContent(score);
  highscoreTextContent('Лучший результат: ' + highscore);
});
