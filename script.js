const api_url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
const quizContainer = document.getElementById("quiz-container")
const progress = document.getElementById("progress")
const quizNumber = document.getElementById("question-number")
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
    quizNumber.textContent = `Question ${index + 1}`;
    questionText.innerHTML = q.question;


    const answers = [...q.incorrect_answers, q.correct_answer];
    answers.sort(() => Math.random() - 0.5);

    const optionChecks = document.querySelectorAll('.option-check');
    answers.forEach((answer, i) =>{
        const input = optionChecks[i].querySelector('input');
        const label = optionChecks[i].querySelector('label');

        input.value = answer;
        label.innerHTML = answer;
        input.checked = false;
});
    previousBtn.disabled = index === 0;
    nextBtn.disabled = index === quizzes.length - 1;

}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < quizzes.length - 1){
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex)
    }
});





