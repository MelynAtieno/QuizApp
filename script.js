const api_url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
const progress = document.getElementById("progress")
const questions = document.getElementById("question")
const answers = document.getElementById("answer")
const next = document.getElementById("next-question")
const previous = document.getElementById("previous-question")
let currentQuestionIndex = 0;

fetch(api_url)
    .then(response => {
        if(!response.ok){
            throw new Error("No response")
        }
        return response.json();
    })

function handleProgress(){
    questions.forEach((question) => {
        progress.innerHTML += `<span></span>`
    });

    questions.innerHTML = `<p>${question[index]}</p>`
}
handleProgress(currentQuestionIndex);



