function getCurrentAccountEmail() {
  try {
    const currentUser = JSON.parse(localStorage.getItem("eduvanceCurrentUser"));

    if (typeof currentUser?.email !== "string" || !currentUser.email.trim()) {
      return null;
    }

    return currentUser.email.trim().toLowerCase();
  } catch (error) {
    return null;
  }
}

const ACCOUNT_EMAIL = getCurrentAccountEmail();

const RESULTS_KEY = ACCOUNT_EMAIL
  ? `eduvanceAssessmentResults:${encodeURIComponent(ACCOUNT_EMAIL)}`
  : null;

const DRAFT_KEY = ACCOUNT_EMAIL
  ? `eduvanceAssessmentDraft:${encodeURIComponent(ACCOUNT_EMAIL)}`
  : null;

const DIMENSION_KEYS = [
  "AT",
  "PS",
  "TD",
  "SC",
  "CR",
  "CO",
  "PH",
  "LE",
  "PR",
  "BE",
];

let currentQuestionIndex = 0;
const selectedAnswers = {};

let currentAttemptId = "";
let startedFromRetake = false;

const questionNumber = document.getElementById("question-number");
const questionPercentage = document.getElementById("question-percentage");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const questionHelper = document.getElementById("question-helper");
const answerOptions = document.getElementById("answer-options");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const questionPosition = document.getElementById("question-position");

function readStorage(key) {
  try {
    const value = localStorage.getItem(key);

    return {
      ok: true,
      value: value === null ? null : JSON.parse(value),
    };
  } catch (error) {
    console.error(`Could not read ${key}:`, error);

    return {
      ok: false,
      value: null,
    };
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key}:`, error);
    return false;
  }
}

function hasValidAnswers(answers, requireAll = false) {
  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    return false;
  }

  for (const questionId of Object.keys(answers)) {
    const question = questions.find((item) => String(item.id) === questionId);

    if (!question) {
      return false;
    }

    const optionExists = question.options.some(
      (option) => option.id === answers[questionId],
    );

    if (!optionExists) {
      return false;
    }
  }

  if (requireAll) {
    return (
      questions.length === 25 &&
      questions.every((question) =>
        question.options.some((option) => option.id === answers[question.id]),
      )
    );
  }

  return true;
}

function calculateScores(answers = selectedAnswers) {
  const scores = Object.fromEntries(
    DIMENSION_KEYS.map((dimension) => [dimension, 0]),
  );

  questions.forEach((question) => {
    const selectedOptionId = answers[question.id];

    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    );

    if (!selectedOption) {
      return;
    }

    const dimension = selectedOption.dimension;
    const points = selectedOption.points;

    if (
      !DIMENSION_KEYS.includes(dimension) ||
      !Number.isFinite(points) ||
      points < 0
    ) {
      throw new Error("Invalid question scoring data.");
    }

    scores[dimension] += points;
  });

  return scores;
}

function hasValidScores(scores) {
  if (!scores || typeof scores !== "object" || Array.isArray(scores)) {
    return false;
  }

  if (
    Object.keys(scores).length !== DIMENSION_KEYS.length ||
    !DIMENSION_KEYS.every((key) =>
      Object.prototype.hasOwnProperty.call(scores, key),
    )
  ) {
    return false;
  }

  return DIMENSION_KEYS.every(
    (key) =>
      Number.isInteger(scores[key]) && scores[key] >= 0 && scores[key] <= 30,
  );
}

function isValidCompletedAssessment(result) {
  if (
    !result ||
    result.schemaVersion !== 1 ||
    result.completed !== true ||
    typeof result.attemptId !== "string" ||
    typeof result.completedAt !== "string" ||
    !Number.isFinite(Date.parse(result.completedAt))
  ) {
    return false;
  }

  if (!hasValidAnswers(result.answers, true)) {
    return false;
  }

  if (!hasValidScores(result.scores)) {
    return false;
  }

  try {
    const recalculatedScores = calculateScores(result.answers);

    return DIMENSION_KEYS.every(
      (key) => recalculatedScores[key] === result.scores[key],
    );
  } catch (error) {
    return false;
  }
}

function isValidDraft(draft) {
  return Boolean(
    draft &&
    draft.schemaVersion === 1 &&
    typeof draft.attemptId === "string" &&
    Number.isInteger(draft.currentQuestionIndex) &&
    draft.currentQuestionIndex >= 0 &&
    draft.currentQuestionIndex < questions.length &&
    typeof draft.startedFromRetake === "boolean" &&
    hasValidAnswers(draft.answers, false),
  );
}

function createAttemptId() {
  return `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function saveDraft() {
  const draft = {
    schemaVersion: 1,
    attemptId: currentAttemptId,
    currentQuestionIndex,
    answers: { ...selectedAnswers },
    startedFromRetake,
  };

  return writeStorage(DRAFT_KEY, draft);
}

function restoreDraft(draft) {
  currentAttemptId = draft.attemptId;
  currentQuestionIndex = draft.currentQuestionIndex;
  startedFromRetake = draft.startedFromRetake;

  Object.keys(selectedAnswers).forEach((key) => {
    delete selectedAnswers[key];
  });

  Object.assign(selectedAnswers, draft.answers);
}

function initializeAttempt() {
  if (questions.length !== 25) {
    alert("The assessment questions could not be loaded correctly.");
    return false;
  }

  const resultsRead = readStorage(RESULTS_KEY);
  const draftRead = readStorage(DRAFT_KEY);

  const previousResult = resultsRead.ok ? resultsRead.value : null;

  const validPreviousResult = isValidCompletedAssessment(previousResult);

  const existingDraft = draftRead.ok ? draftRead.value : null;

  const validExistingDraft = isValidDraft(existingDraft);

  const draftAlreadyCompleted =
    validPreviousResult &&
    validExistingDraft &&
    existingDraft.attemptId === previousResult.attemptId;

  const usableDraft = validExistingDraft && !draftAlreadyCompleted;

  const retakeRequested =
    new URLSearchParams(window.location.search).get("retake") === "1";

  if (retakeRequested) {
    // A retake already in progress should survive a page refresh.
    if (usableDraft && existingDraft.startedFromRetake) {
      restoreDraft(existingDraft);
      return true;
    }

    if (usableDraft && Object.keys(existingDraft.answers).length > 0) {
      const shouldStartOver = window.confirm(
        "Starting a new attempt will discard your unfinished answers. " +
          "Your last completed results will remain safe. Continue?",
      );

      if (!shouldStartOver) {
        window.location.replace("results.html");
        return false;
      }
    }

    startedFromRetake = true;
    currentAttemptId = createAttemptId();

    Object.keys(selectedAnswers).forEach((key) => {
      delete selectedAnswers[key];
    });

    saveDraft();
    return true;
  }

  if (usableDraft) {
    restoreDraft(existingDraft);
    return true;
  }

  currentQuestionIndex = 0;
  startedFromRetake = false;
  currentAttemptId = createAttemptId();

  Object.keys(selectedAnswers).forEach((key) => {
    delete selectedAnswers[key];
  });

  saveDraft();
  return true;
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  questionNumber.textContent = String(currentQuestionIndex + 1).padStart(
    2,
    "0",
  );

  questionText.textContent = question.title;
  questionHelper.textContent = question.prompt;

  const progress = Math.round(
    ((currentQuestionIndex + 1) / questions.length) * 100,
  );

  questionPercentage.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  const progressBar = document.querySelector(".question-progress");

  progressBar.setAttribute("aria-valuenow", progress);

  answerOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-option";
    button.textContent = option.text;

    const isSelected = selectedAnswers[question.id] === option.id;

    if (isSelected) {
      button.classList.add("selected");
    }

    button.setAttribute("aria-pressed", String(isSelected));

    button.addEventListener("click", () => {
      selectedAnswers[question.id] = option.id;
      saveDraft();
      renderQuestion();
    });

    answerOptions.appendChild(button);
  });

  previousButton.disabled = currentQuestionIndex === 0;

  nextButton.disabled = selectedAnswers[question.id] === undefined;

  questionPosition.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  nextButton.textContent =
    currentQuestionIndex === questions.length - 1
      ? "Finish assessment"
      : "Next question";
}

previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    saveDraft();
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  const question = questions[currentQuestionIndex];

  if (
    !question ||
    !question.options.some(
      (option) => option.id === selectedAnswers[question.id],
    )
  ) {
    return;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    saveDraft();
    renderQuestion();
  } else {
    finishAssessment();
  }
});

function finishAssessment() {
  if (questions.length !== 25 || !hasValidAnswers(selectedAnswers, true)) {
    alert("Please answer all 25 questions before finishing the assessment.");
    return;
  }

  let scores;

  try {
    scores = calculateScores(selectedAnswers);
  } catch (error) {
    console.error("Assessment scoring failed:", error);
    alert(
      "We couldn't calculate your results. Your previous completed results have not been changed.",
    );
    return;
  }

  if (!hasValidScores(scores)) {
    alert(
      "The calculated scores were invalid. Your previous completed results have not been changed.",
    );
    return;
  }

  const completedAssessment = {
    schemaVersion: 1,
    completed: true,
    attemptId: currentAttemptId,
    completedAt: new Date().toISOString(),
    answers: { ...selectedAnswers },
    scores,
  };

  const saved = writeStorage(RESULTS_KEY, completedAssessment);

  if (!saved) {
    alert(
      "Your results could not be saved in this browser. " +
        "Please check your browser's storage settings and try again. " +
        "Your previous completed results have not been intentionally changed.",
    );
    return;
  }

  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (error) {
    console.warn("The completed draft could not be removed:", error);
  }

  window.location.href = "results.html";
}

if (!ACCOUNT_EMAIL) {
  window.location.replace("login.html");
} else if (initializeAttempt()) {
  renderQuestion();
}
