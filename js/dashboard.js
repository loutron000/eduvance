(() => {
  "use strict";

  const currentUser = readJSON("eduvanceCurrentUser");

  if (!currentUser || typeof currentUser.email !== "string") {
    window.location.replace("login.html");
    return;
  }

  const accountEmail = currentUser.email.trim().toLowerCase();

  if (!accountEmail) {
    window.location.replace("login.html");
    return;
  }

  const resultsKey = `eduvanceAssessmentResults:${encodeURIComponent(accountEmail)}`;

  const draftKey = `eduvanceAssessmentDraft:${encodeURIComponent(accountEmail)}`;

  const dimensionKeys = [
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

  const welcomeName = document.getElementById("user-name");

  const assessmentNew = document.querySelector(".dashboard-assessment_new");

  const assessmentInProgress = document.querySelector(
    ".dashboard-assessment_in-progress",
  );

  const assessmentCompleted = document.querySelector(
    ".dashboard-assessment_completed",
  );

  const resultsNew = document.querySelector(".dashboard-results_new");

  const resultsCompleted = document.querySelector(
    ".dashboard-results_completed",
  );

  const roadmapNew = document.querySelector(".dashboard-roadmap_new");

  const roadmapCompleted = document.querySelector(
    ".dashboard-roadmap_completed",
  );

  function readJSON(key) {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue === null ? null : JSON.parse(storedValue);
    } catch (error) {
      console.error(`Could not read ${key}:`, error);
      return null;
    }
  }

  function showElement(element, shouldShow) {
    if (element) {
      element.hidden = !shouldShow;
    }
  }

  function isValidScores(scores) {
    if (!scores || typeof scores !== "object" || Array.isArray(scores)) {
      return false;
    }

    if (
      Object.keys(scores).length !== dimensionKeys.length ||
      !dimensionKeys.every((key) =>
        Object.prototype.hasOwnProperty.call(scores, key),
      )
    ) {
      return false;
    }

    return dimensionKeys.every(
      (key) =>
        Number.isInteger(scores[key]) && scores[key] >= 0 && scores[key] <= 30,
    );
  }

  function isValidResult(result) {
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
      draft.attemptId.length > 0 &&
      Number.isInteger(draft.currentQuestionIndex) &&
      draft.currentQuestionIndex >= 0 &&
      draft.currentQuestionIndex < 25 &&
      typeof draft.startedFromRetake === "boolean" &&
      draft.answers &&
      typeof draft.answers === "object" &&
      !Array.isArray(draft.answers),
    );
  }

  function calculateCareerAlignment(career, scores) {
    if (!career || !career.weights || typeof career.weights !== "object") {
      return null;
    }

    let weightedScore = 0;
    let totalWeight = 0;

    for (const key of dimensionKeys) {
      const score = scores[key];
      const weight = career.weights[key];

      if (
        !Number.isFinite(score) ||
        !Number.isFinite(weight) ||
        weight < 1 ||
        weight > 5
      ) {
        return null;
      }

      weightedScore += (score / 30) * weight;
      totalWeight += weight;
    }

    if (totalWeight <= 0) {
      return null;
    }

    return (weightedScore / totalWeight) * 100;
  }

  function getTopCareer(scores) {
    if (!Array.isArray(window.CAREERS)) {
      return null;
    }

    const rankedCareers = window.CAREERS.map((career) => {
      const alignment = calculateCareerAlignment(career, scores);

      if (alignment === null) {
        return null;
      }

      return {
        id: career.id,
        name: career.name,
        alignment,
      };
    })
      .filter(Boolean)
      .sort(
        (a, b) => b.alignment - a.alignment || a.name.localeCompare(b.name),
      );

    return rankedCareers[0] || null;
  }

  function updateRoadmapLink(result) {
    const roadmapLink = document.querySelector(
      ".dashboard-roadmap_completed .dashboard-roadmap_button",
    );

    if (!roadmapLink) {
      return;
    }

    const topCareer = getTopCareer(result.scores);

    if (!topCareer) {
      roadmapLink.hidden = true;
      console.warn(
        "No valid career recommendation was available for the dashboard roadmap.",
      );
      return;
    }

    roadmapLink.href = `roadmap.html?id=${encodeURIComponent(topCareer.id)}`;

    roadmapLink.hidden = false;
  }

  function renderDashboard() {
    const savedResult = readJSON(resultsKey);
    const savedDraft = readJSON(draftKey);

    const hasResult = isValidResult(savedResult);
    const hasDraft = isValidDraft(savedDraft);

    const draftIsAlreadyCompleted =
      hasResult && hasDraft && savedDraft.attemptId === savedResult.attemptId;

    const hasOngoingDraft = hasDraft && !draftIsAlreadyCompleted;

    if (welcomeName) {
      welcomeName.textContent =
        typeof currentUser.name === "string" && currentUser.name.trim()
          ? currentUser.name.trim()
          : "there";
    }

    const assessmentState = hasOngoingDraft
      ? "in-progress"
      : hasResult
        ? "completed"
        : "new";

    showElement(assessmentNew, assessmentState === "new");
    showElement(assessmentInProgress, assessmentState === "in-progress");
    showElement(assessmentCompleted, assessmentState === "completed");

    showElement(resultsNew, !hasResult);
    showElement(resultsCompleted, hasResult);

    showElement(roadmapNew, !hasResult);
    showElement(roadmapCompleted, hasResult);

    if (hasResult) {
      updateRoadmapLink(savedResult);
    }
  }

  renderDashboard();
})();
