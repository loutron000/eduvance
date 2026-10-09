const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        const activeNav = document.querySelector(
            ".navbar-links:not(.hidden)"
        );

        if (!activeNav) return;

        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );

        activeNav.classList.toggle("mobile-nav-open", !isOpen);
    });
}


const loggedOutNav = document.querySelector(".logged-out-nav");
const loggedInNav = document.querySelector(".logged-in-nav");

let currentUser = null;

try {
  currentUser = JSON.parse(
    localStorage.getItem("eduvanceCurrentUser")
  );
} catch {
  currentUser = null;
}

const isLoggedIn = Boolean(
  currentUser &&
  typeof currentUser.name === "string" &&
  typeof currentUser.email === "string"
);


const isInsidePages = window.location.pathname.includes("/pages/");
const isLandingPage =
  !isInsidePages &&
  (window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("/index.html"));

const homePath = isInsidePages ? "../index.html" : "index.html";
const dashboardPath = isInsidePages
  ? "dashboard.html"
  : "pages/dashboard.html";

if (loggedOutNav && loggedInNav) {
  loggedOutNav.classList.toggle("hidden", isLoggedIn);
  loggedInNav.classList.toggle("hidden", !isLoggedIn);
}

const logoLink = document.querySelector(".navbar-brand");

if (logoLink) {
  logoLink.setAttribute(
    "href",
    isLoggedIn ? dashboardPath : homePath
  );
}

if (isLandingPage && isLoggedIn) {
  window.location.replace(dashboardPath);
}