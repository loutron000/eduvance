const THEME_STORAGE_KEY = "eduvance-theme";
const root = document.documentElement;

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark"
      ? "dark"
      : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;

  document.querySelectorAll(".theme-logo").forEach((logo) => {
    logo.src = theme === "dark" ? logo.dataset.darkSrc : logo.dataset.lightSrc;
  });

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    const isDark = theme === "dark";
    const icon = button.querySelector(".theme-toggle-icon");
    const label = button.querySelector(".theme-toggle-label");

    if (icon) {
      icon.textContent = isDark ? "☀" : "☾";
    }

    if (label) {
      label.textContent = isDark ? "Light mode" : "Dark mode";
    }

    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );

    button.setAttribute("aria-pressed", String(isDark));
  });
}

applyTheme(getSavedTheme());

function initialiseThemeToggle() {
  applyTheme(getSavedTheme());
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);

      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {}
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseThemeToggle);
} else {
  initialiseThemeToggle();
}
