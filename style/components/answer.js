const answerList = document.querySelector('[data-js="answer"]');

answerList.forEach(answer => {
const button = answer.querySelector('[data-js="answer-button"]');
const answerAnswer = answer.querySelector('data-js="answer-answer"]');
button.addEventListener('click', () => {
answerAnswer.classList.toggle('show');
    });
});

