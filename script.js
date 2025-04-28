const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
constProgress = document.getElementById("progress")
constQuestions = document.getElementById("questions")
constAnswers = document.getElementById("answers")

fetch(url);