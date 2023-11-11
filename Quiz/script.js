// Quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions as needed
];

// Global variables
let currentQuestion = 0;
let score = 0;
let timer;

// DOM elements
const introHolder = document.getElementById("intro");
const questionHolder = document.getElementById("question-container");
const result = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("timer");
const finalScore = document.getElementById("final-score");

// Function to start the quiz
function startQuiz() {
    introHolder.style.display = "none";
    questionHolder.style.display = "block";
    loadQuestion();
}

// Function to load a question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Display answer choices
    currentQuizData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.addEventListener("click", () => chooseAnswer(choice));
        choicesElement.appendChild(button);
    });

    // Start the timer
    startTimer();
}

// Function to choose an answer
function chooseAnswer(selectedAnswer) {
    clearInterval(timer);
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    disableChoices();
}

// Function to disable answer choices after selection
function disableChoices() {
    const buttons = choicesElement.getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}

// Function to submit the answer
function submitAnswer() {
    chooseAnswer("");
}

// Function to move to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to start the timer for each question
function startTimer() {
    let timeLeft = 10; // Adjust the time limit as needed
    timer = setInterval(() => {
        timerElement.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft === 0) {
            chooseAnswer("");
        }
        timeLeft--;
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    questionHolder.style.display = "none";
    result.style.display = "block";
    finalScore.innerText = score;
}
