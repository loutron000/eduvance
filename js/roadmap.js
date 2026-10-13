const roadmapParams = new URLSearchParams(window.location.search);
const roadmapCareerId = roadmapParams.get("id");

const roadmapCareerList = window.CAREERS || [];

const roadmapCareer = roadmapCareerList.find(
  (career) => career.id === roadmapCareerId,
);

const roadmapData =
  typeof roadmaps !== "undefined" ? roadmaps[roadmapCareerId] : null;

const roadmapTitle = document.getElementById("roadmap-title");
const roadmapIntro = document.getElementById("roadmap-intro");
const roadmapStagesContainer = document.getElementById("roadmap-stages");
const roadmapResourcesContainer = document.getElementById("roadmap-resources");
const roadmapBackLink = document.getElementById("roadmap-back-link");

const roadmapError = document.getElementById("roadmap-error");
const roadmapErrorMessage = document.getElementById("roadmap-error-message");

const roadmapHero = document.querySelector(".roadmap-hero");
const roadmapContent = document.querySelector(".roadmap-content");
const roadmapResourcesSection = document.querySelector(
  ".roadmap-resources-section",
);
const roadmapClosing = document.querySelector(".roadmap-closing");

function createRoadmapElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function showRoadmapError(message) {
  if (roadmapHero) roadmapHero.hidden = true;
  if (roadmapContent) roadmapContent.hidden = true;
  if (roadmapResourcesSection) {
    roadmapResourcesSection.hidden = true;
  }
  if (roadmapClosing) roadmapClosing.hidden = true;

  if (roadmapErrorMessage) {
    roadmapErrorMessage.textContent = message;
  }

  if (roadmapError) {
    roadmapError.hidden = false;
  }
}

function renderRoadmapHeader(career) {
  roadmapTitle.textContent = `Your path to becoming a ${career.name}`;

  roadmapIntro.textContent =
    `Explore practical learning stages, activities, and resources to help you ` +
    `build the skills needed for a career in this field.`;

  document.title = `${career.name} Roadmap | EDUVANCE`;

  if (roadmapBackLink) {
    roadmapBackLink.href = `career.html?id=${encodeURIComponent(career.id)}`;

    roadmapBackLink.textContent = `← Back to ${career.name}`;
  }
}

function renderRoadmapStages(stages) {
  roadmapStagesContainer.replaceChildren();

  stages.forEach((stage) => {
    const stageCard = createRoadmapElement("article", "roadmap-stage");

    const stageTitle = createRoadmapElement("h3", "", stage.title);

    const stageDescription = createRoadmapElement(
      "p",
      "roadmap-stage-description",
      stage.description,
    );

    const activitiesContainer = createRoadmapElement(
      "div",
      "roadmap-stage-activities",
    );

    stage.activities.forEach((activity) => {
      const activityCard = createRoadmapElement("div", "roadmap-activity");

      const activityTitle = createRoadmapElement("h4", "", activity.title);

      const activityDescription = createRoadmapElement(
        "p",
        "",
        activity.description,
      );

      activityCard.append(activityTitle, activityDescription);

      activitiesContainer.appendChild(activityCard);
    });

    stageCard.append(stageTitle, stageDescription, activitiesContainer);

    roadmapStagesContainer.appendChild(stageCard);
  });
}

function renderRoadmapResources(resources) {
  roadmapResourcesContainer.replaceChildren();

  resources.forEach((resource) => {
    const resourceCard = createRoadmapElement("article", "roadmap-resource");

    const resourceTitle = createRoadmapElement("h3", "", resource.title);

    const resourceDescription = createRoadmapElement(
      "p",
      "",
      resource.description,
    );

    const resourceLink = createRoadmapElement("a", "", "Visit resource ↗");

    resourceLink.href = resource.url;
    resourceLink.target = "_blank";
    resourceLink.rel = "noopener noreferrer";

    resourceCard.append(resourceTitle, resourceDescription, resourceLink);

    roadmapResourcesContainer.appendChild(resourceCard);
  });
}

function initialiseRoadmap() {
  if (!roadmapCareerId) {
    showRoadmapError(
      "Choose a career from the career directory or your career results to view its roadmap.",
    );
    return;
  }

  if (!roadmapCareer) {
    showRoadmapError(
      "We couldn't find that career. Explore the career directory to choose another.",
    );
    return;
  }

  if (
    !roadmapData ||
    !Array.isArray(roadmapData.stages) ||
    roadmapData.stages.length === 0 ||
    !Array.isArray(roadmapData.resources)
  ) {
    showRoadmapError(
      "A learning roadmap for this career is not available yet. Please explore another career.",
    );
    return;
  }

  renderRoadmapHeader(roadmapCareer);
  renderRoadmapStages(roadmapData.stages);
  renderRoadmapResources(roadmapData.resources);
}

initialiseRoadmap();
