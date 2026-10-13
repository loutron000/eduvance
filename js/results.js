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

const DIMENSIONS = [
  { key: "AT", label: "Analytical Thinking" },
  { key: "PS", label: "Problem Solving" },
  { key: "TD", label: "Technology & Digital Thinking" },
  { key: "SC", label: "Scientific Curiosity" },
  { key: "CR", label: "Creativity & Design" },
  { key: "CO", label: "Communication & Expression" },
  { key: "PH", label: "People & Helping" },
  { key: "LE", label: "Leadership & Organisation" },
  { key: "PR", label: "Practical & Hands-on" },
  { key: "BE", label: "Business & Enterprise" },
];

const MAX_DIMENSION_SCORE = 30;

const emptyState = document.getElementById("results-empty-state");
const resultsContent = document.getElementById("results-content");
const errorState = document.getElementById("results-error-state");

function showState(state) {
  emptyState.hidden = state !== "empty";
  resultsContent.hidden = state !== "results";
  errorState.hidden = state !== "error";
}

function readLocalStorage(key) {
  try {
    const rawValue = localStorage.getItem(key);

    return {
      ok: true,
      value: rawValue === null ? null : JSON.parse(rawValue),
    };
  } catch (error) {
    console.error(`Could not read ${key}:`, error);

    return {
      ok: false,
      value: null,
    };
  }
}

function isValidScores(scores) {
  if (!scores || typeof scores !== "object" || Array.isArray(scores)) {
    return false;
  }

  const keys = DIMENSIONS.map((dimension) => dimension.key);

  if (
    Object.keys(scores).length !== keys.length ||
    !keys.every((key) => Object.prototype.hasOwnProperty.call(scores, key))
  ) {
    return false;
  }

  return keys.every(
    (key) =>
      Number.isInteger(scores[key]) &&
      scores[key] >= 0 &&
      scores[key] <= MAX_DIMENSION_SCORE,
  );
}

function isValidCompletedAssessment(result) {
  return Boolean(
    result &&
    result.schemaVersion === 1 &&
    result.completed === true &&
    typeof result.attemptId === "string" &&
    result.attemptId.length > 0 &&
    typeof result.completedAt === "string" &&
    Number.isFinite(Date.parse(result.completedAt)) &&
    result.answers &&
    typeof result.answers === "object" &&
    !Array.isArray(result.answers) &&
    isValidScores(result.scores),
  );
}

function isValidDraft(draft) {
  return Boolean(
    draft &&
    draft.schemaVersion === 1 &&
    typeof draft.attemptId === "string" &&
    Number.isInteger(draft.currentQuestionIndex) &&
    draft.currentQuestionIndex >= 0 &&
    draft.currentQuestionIndex < 25 &&
    typeof draft.startedFromRetake === "boolean" &&
    draft.answers &&
    typeof draft.answers === "object" &&
    !Array.isArray(draft.answers),
  );
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function createCareerLink(career) {
  const link = createElement("a", "results-card-link", "Explore this career →");

  link.href = `career.html?id=${encodeURIComponent(career.id)}`;

  return link;
}

function getCareerIntro(career) {
  return typeof career.intro === "string" && career.intro.trim()
    ? career.intro.trim()
    : "Explore what this career involves and the pathways it can offer.";
}

function createCareerImage(career, className, altText) {
  if (typeof career.image !== "string" || !career.image.trim()) {
    return null;
  }

  const wrapper = createElement("div", className);
  const image = document.createElement("img");

  image.src = career.image;
  image.alt = altText;
  image.loading = "lazy";

  image.addEventListener("error", () => {
    wrapper.remove();
  });

  wrapper.appendChild(image);

  return wrapper;
}

function calculateCareerAlignment(career, scores) {
  if (!career || !career.weights || typeof career.weights !== "object") {
    return null;
  }

  let weightedScore = 0;
  let totalWeight = 0;

  for (const dimension of DIMENSIONS) {
    const score = scores[dimension.key];
    const weight = career.weights[dimension.key];

    if (!Number.isFinite(weight) || weight < 1 || weight > 5) {
      return null;
    }

    weightedScore += (score / MAX_DIMENSION_SCORE) * weight;
    totalWeight += weight;
  }

  if (totalWeight <= 0) {
    return null;
  }

  return (weightedScore / totalWeight) * 100;
}

function getRankedCareers(scores) {
  if (!Array.isArray(window.CAREERS) || window.CAREERS.length === 0) {
    throw new Error("The career data could not be loaded.");
  }

  const seenIds = new Set();

  const ranked = window.CAREERS.map((career) => {
    if (
      !career ||
      typeof career.id !== "string" ||
      !career.id.trim() ||
      typeof career.name !== "string" ||
      !career.name.trim() ||
      seenIds.has(career.id)
    ) {
      throw new Error("The career data contains an invalid or duplicate ID.");
    }

    seenIds.add(career.id);

    const alignment = calculateCareerAlignment(career, scores);

    if (alignment === null) {
      throw new Error(`Invalid career weights for ${career.name}.`);
    }

    return { ...career, alignment };
  });

  if (ranked.length < 6) {
    throw new Error("At least six careers are needed for recommendations.");
  }

  return ranked.sort(
    (a, b) => b.alignment - a.alignment || a.name.localeCompare(b.name),
  );
}

function renderFeaturedCareer(career) {
  setText("featured-family", career.family || "Career pathway");
  setText("featured-name", career.name);
  setText(
    "featured-score",
    `${career.alignment.toFixed(1)} / 100 interest alignment`,
  );
  setText("featured-intro", getCareerIntro(career));

  const link = document.getElementById("featured-link");
  link.href = `career.html?id=${encodeURIComponent(career.id)}`;

  const imageWrapper = document.getElementById("featured-image-wrap");
  const image = document.getElementById("featured-image");

  imageWrapper.hidden = true;
  image.removeAttribute("src");
  image.alt = "";

  if (typeof career.image === "string" && career.image.trim()) {
    image.src = career.image;
    image.alt = career.name;
    imageWrapper.hidden = false;

    image.onerror = () => {
      imageWrapper.hidden = true;
      image.removeAttribute("src");
    };
  }
}

function renderAlternativeCareers(careers) {
  const container = document.getElementById("alternative-careers");
  container.replaceChildren();

  careers.forEach((career) => {
    const card = createElement("article", "results-career-card");

    const image = createCareerImage(
      career,
      "results-card-image-wrap",
      career.name,
    );

    if (image) {
      card.appendChild(image);
    }

    const body = createElement("div", "results-card-body");

    body.appendChild(
      createElement(
        "p",
        "results-card-family",
        career.family || "Career pathway",
      ),
    );

    body.appendChild(createElement("h3", "", career.name));

    body.appendChild(
      createElement("p", "results-card-intro", getCareerIntro(career)),
    );

    body.appendChild(
      createElement(
        "p",
        "results-card-score",
        `${career.alignment.toFixed(1)} / 100 alignment`,
      ),
    );

    body.appendChild(createCareerLink(career));
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderDimensions(scores) {
  const sortedDimensions = DIMENSIONS.map((dimension) => ({
    ...dimension,
    score: scores[dimension.key],
  })).sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));

  const topContainer = document.getElementById("top-dimensions");
  const allContainer = document.getElementById("all-dimensions");

  topContainer.replaceChildren();
  allContainer.replaceChildren();

  sortedDimensions.slice(0, 3).forEach((dimension) => {
    const card = createElement("div", "results-top-dimension");

    card.appendChild(
      createElement("span", "results-top-dimension-label", dimension.label),
    );

    const score = createElement("span", "results-top-dimension-score");
    score.appendChild(document.createTextNode(String(dimension.score)));

    score.appendChild(createElement("small", "", " / 30"));

    card.appendChild(score);
    topContainer.appendChild(card);
  });

  sortedDimensions.forEach((dimension, index) => {
    const row = createElement(
      "div",
      `results-dimension-row${index < 3 ? " is-strong" : ""}`,
    );

    row.appendChild(
      createElement("span", "results-dimension-label", dimension.label),
    );

    const track = createElement("div", "results-dimension-track");
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", dimension.label);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", String(MAX_DIMENSION_SCORE));
    track.setAttribute("aria-valuenow", String(dimension.score));

    const fill = createElement("div", "results-dimension-fill");
    fill.style.width = `${(dimension.score / MAX_DIMENSION_SCORE) * 100}%`;

    track.appendChild(fill);
    row.appendChild(track);

    row.appendChild(
      createElement("span", "results-dimension-score", `${dimension.score}/30`),
    );

    allContainer.appendChild(row);
  });
}

function renderResults(result) {
  const rankedCareers = getRankedCareers(result.scores);

  renderFeaturedCareer(rankedCareers[0]);
  renderAlternativeCareers(rankedCareers.slice(1, 6));
  renderDimensions(result.scores);

  showState("results");
}

function showEmptyState(draft) {
  if (draft && isValidDraft(draft)) {
    setText("empty-title", "You're partway through your assessment.");

    setText(
      "empty-message",
      "Continue where you left off to complete your assessment and see your personalized career results.",
    );

    const action = document.getElementById("empty-action");
    action.textContent = "Continue assessment →";
    action.href = "assessment.html";
  }

  showState("empty");
}

function showErrorState(message) {
  setText("error-message", message);
  showState("error");
}

function initializeResults() {
  if (!ACCOUNT_EMAIL) {
    setText("empty-title", "Sign in to view your results.");
    setText(
      "empty-message",
      "Sign in to view your saved assessment results, or take the assessment to get started.",
    );

    const action = document.getElementById("empty-action");
    action.textContent = "Sign in →";
    action.href = "login.html";

    showState("empty");
    return;
  }

  const resultsRead = readLocalStorage(RESULTS_KEY);
  const draftRead = readLocalStorage(DRAFT_KEY);

  if (!resultsRead.ok || !draftRead.ok) {
    showErrorState(
      "Your browser could not read the saved assessment data. Check your browser storage settings and try again.",
    );
    return;
  }

  const result = resultsRead.value;
  const draft = draftRead.value;

  if (result === null) {
    showEmptyState(draft);
    return;
  }

  if (!isValidCompletedAssessment(result)) {
    showErrorState(
      "The saved assessment could not be verified. You can start a fresh assessment; an invalid result will not be displayed as complete.",
    );
    return;
  }

  try {
    renderResults(result);
  } catch (error) {
    console.error("Could not render results:", error);

    showErrorState(
      "We couldn't build your recommendations from the available career data. Please check the career data and try again.",
    );
  }
}

initializeResults();
