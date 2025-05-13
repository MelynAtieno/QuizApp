const api_url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
const quizContainer = document.getElementById("quiz-container")
const progress = document.getElementById("progress")
const quizNumber = document.getElementById("question-number")
const questionText = document.getElementById("questionText")
const answersText = document.getElementById("answer")
const nextBtn = document.getElementById("next-question")
const previousBtn = document.getElementById("previous-question")
const submitBtn = document.getElementById("submit")
let currentQuestionIndex = 0;
let score = 0;
let  quizzes = [];
let userAnswers = new Array(10).fill(null);

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

    if(index === quizzes.length - 1){
        nextBtn.style.display = "none";
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }

    const selectedAnswer = userAnswers[index];
    if(selectedAnswer){
        optionChecks.forEach(opt => {
            const input = opt.querySelector('input');
            input.checked = input.value === selectedAnswer;
        });
    }

}

nextBtn.addEventListener("click",() => {
    const selected = document.querySelector('input[name="choices"]:checked')
    if(selected){
        userAnswers[currentQuestionIndex] = selected.value;
        }

    if(currentQuestionIndex < quizzes.length - 1){
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex)
    }
});

previousBtn.addEventListener("click", () => {
    if(currentQuestionIndex > 0){
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex)
    }
});

submitBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="choices"]:checked')
    if(selected){
        userAnswers[currentQuestionIndex] = selected.value;
        }
    
    score = userAnswers.reduce((total, answer, i) =>{
        if(answer === quizzes[i].correct_answer){
            return total + 1;
        }
        return total
    }, 0);

    quizContainer.innerHTML = 
        `<h1>THE END !</h1>
         <h3>TOTAL SCORE: ${score}/${quizzes.length}</h3>`;
    
    previousBtn.style.display = "none";
    submitBtn.style.display = "none";
})










