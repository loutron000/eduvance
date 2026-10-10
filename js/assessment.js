let currentQuestionIndex = 0;
const selectedAnswers = {};

const questionNumber = document.getElementById("question-number");
const questionPercentage = document.getElementById("question-percentage");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const questionHelper = document.getElementById("question-helper");
const answerOptions = document.getElementById("answer-options");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const questionPosition = document.getElementById("question-position");


function renderQuestion() {
    const question = questions[currentQuestionIndex];

    questionNumber.textContent = String(currentQuestionIndex + 1).padStart(2, "0");
    questionText.textContent = question.title;
    questionHelper.textContent = question.prompt;

    const progress = Math.round(
        ((currentQuestionIndex + 1) / questions.length) * 100
    );

    questionPercentage.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;

    answerOptions.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = option.text;

        if (selectedAnswers[question.id] === option.id) {
            button.classList.add("selected");
            button.setAttribute("aria-pressed", "true");
        } else {
            button.setAttribute("aria-pressed", "false");
        }

        button.addEventListener("click", () => {
            selectedAnswers[question.id] = option.id;
            renderQuestion();
        });

        answerOptions.appendChild(button);
    });

    previousButton.disabled = currentQuestionIndex === 0;

    nextButton.disabled = selectedAnswers[question.id] === undefined;

    questionPosition.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "Finish assessment"
            : "Next question";
}

previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

nextButton.addEventListener("click", () => {
    const question = questions[currentQuestionIndex];

    if (selectedAnswers[question.id] === undefined) {
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        finishAssessment();
    }
});

function calculateScores() {
    const scores = {
        AT: 0,
        PS: 0,
        TD: 0,
        SC: 0,
        CR: 0,
        CO: 0,
        PH: 0,
        LE: 0,
        PR: 0,
        BE: 0
    };

    questions.forEach((question) => {
        const selectedOptionId = selectedAnswers[question.id];

        const selectedOption = question.options.find(
            (option) => option.id === selectedOptionId
        );

        if (selectedOption) {
            scores[selectedOption.dimension] += selectedOption.points;
        }
    });

    return scores;
}

function finishAssessment() {
    const scores = calculateScores();

    console.log("Selected answers:", selectedAnswers);
    console.log("Dimension scores:", scores);

    alert("Assessment completed! Your scores have been calculated. Check the browser console.");
}

renderQuestion();