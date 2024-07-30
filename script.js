let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function increaseScore() {
    correctAnswers++;
    score++;
    updateScore();
}

function decreaseScore() {
    incorrectAnswers++;
    score--;
    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('correctScore').textContent = "Correct : " + correctAnswers;
    document.getElementById('incorrectScore').textContent =  "Incorrect : " + incorrectAnswers;
}
