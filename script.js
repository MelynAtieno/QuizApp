const api_url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
const quizContainer = document.getElementById("quiz-container")
const progress = document.getElementById("progress")
const questionText = document.getElementById("questionText")
const answersText = document.getElementById("answer")
const nextBtn = document.getElementById("next-question")
const previousBtn = document.getElementById("previous-question")
let currentQuestionIndex = 0;
let score = 0;
let  quizzes = [];

fetch(api_url)
    .then(res => res.json())
    .then(data => {
        quizzes = data.results
        displayQuestion(currentQuestionIndex);
    });

function displayQuestion(index){
    const q = quizzes[index];
    questionText.innerHTML = q.question;

}





