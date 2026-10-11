const careers = window.CAREERS || [];

const params = new URLSearchParams(window.location.search);
const careerId = params.get("id");

const career = careers.find((item) => item.id === careerId);

const careerName = document.getElementById("career-name");
const careerFamily = document.getElementById("career-family");
const careerIntro = document.getElementById("career-intro");

if (career) {
  careerName.textContent = career.name;
  careerFamily.textContent = career.family;

  careerIntro.textContent =
    "Explore the work involved in this career, the skills it uses, " +
    "and the opportunities available to you.";

  document.title = `${career.name} | Eduvance`;
} else {
  careerName.textContent = "Career not found";
  careerFamily.textContent = "Explore your options";

  careerIntro.textContent =
    "We couldn't find that career. Return to the career directory to explore other options.";

  document.title = "Career Not Found | Eduvance";
}
