const careers = window.CAREERS || [];

const params = new URLSearchParams(window.location.search);
const careerId = params.get("id");

const career = careers.find((item) => item.id === careerId);

const careerName = document.getElementById("career-name");
const careerFamily = document.getElementById("career-family");
const careerIntro = document.getElementById("career-intro");
const careerImage = document.getElementById("career-image");

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text || "";
}

function renderList(id, items) {
  const list = document.getElementById(id);
  if (!list) return;

  list.replaceChildren();

  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function toggleSection(id, hasContent) {
  const section = document.getElementById(id);
  if (section) section.hidden = !hasContent;
}

if (career) {
  careerName.textContent = career.name;
  careerFamily.textContent = career.family;
  careerIntro.textContent = career.intro || "Explore this career, the skills it uses, and the opportunities it can offer.";

  if (careerImage) {
    if (career.image) {
      careerImage.src = career.image;
      careerImage.alt = `A representation of a ${career.name}`;
      careerImage.hidden = false;
    } else {
      careerImage.hidden = true;
    }
  }

  setText("career-overview", career.overview);
  toggleSection("overview-section", Boolean(career.overview));

  renderList("career-skills", career.skills);
  toggleSection("skills-section", Boolean(career.skills?.length));

  setText("career-subjects-intro", career.subjectsIntro);
  renderList("career-subjects", career.subjects);
  toggleSection("subjects-section", Boolean(career.subjects?.length));

  const educationContainer = document.getElementById("career-education");
  const education = career.education;

  if (educationContainer) {
    educationContainer.replaceChildren();

    if (education) {
      if (education.summary) {
        const summary = document.createElement("p");
        summary.textContent = education.summary;
        educationContainer.appendChild(summary);
      }

      if (education.routes?.length) {
        const routesList = document.createElement("ul");

        education.routes.forEach((route) => {
          const li = document.createElement("li");
          li.textContent = route;
          routesList.appendChild(li);
        });

        educationContainer.appendChild(routesList);
      }

      if (education.admissionNote) {
        const note = document.createElement("p");
        note.textContent = education.admissionNote;
        educationContainer.appendChild(note);
      }
    }
  }

  toggleSection(
    "education-section",
    Boolean(education && (education.summary || education.routes?.length || education.admissionNote))
  );

  setText("career-opportunities-intro", career.opportunitiesIntro);
  renderList("career-opportunities", career.opportunities);
  toggleSection("opportunities-section", Boolean(career.opportunities?.length));

  const roadmapLink = document.getElementById("career-roadmap-link");
  if (roadmapLink) {
    roadmapLink.href = `roadmap.html?id=${encodeURIComponent(career.id)}`;
  }

  document.title = `${career.name} | Eduvance`;
} else {

  if (careerName) careerName.textContent = "Career not found";
  if (careerFamily) careerFamily.textContent = "Explore your options";
  if (careerIntro) careerIntro.textContent = "We couldn't find that career. Return to the career directory to explore other options.";

  if (careerImage) careerImage.hidden = true;

  ["overview-section", "skills-section", "subjects-section", "education-section", "opportunities-section"].forEach((id) => {
    toggleSection(id, false);
  });

  const roadmapLink = document.getElementById("career-roadmap-link");
  if (roadmapLink) roadmapLink.hidden = true;

  document.title = "Career Not Found | Eduvance";
}