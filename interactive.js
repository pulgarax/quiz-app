import './style/components/answer.js';

/*AnswersForEach*/

const answers = document.querySelectorAll('[data-js="select-card"]');

answers.forEach(answer => {
    const button = answer.querySelector('[data-js="answer-button"]');
    const answerAnswer = answer.querySelector('[data-js="answer-answer"]');
    button.addEventListener('click', () => {
        answerAnswer.classList.toggle('display-toggle');
    });
});

const bookmark = document.querySelectorAll('[data-js="bookmarkScript"]');

answers.forEach(answer => {
});