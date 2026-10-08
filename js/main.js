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