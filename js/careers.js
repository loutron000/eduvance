const careers = window.CAREERS || [];

const careersList = document.getElementById("careers-list");
const careersCount = document.getElementById("careers-count");

if (careersCount) {
    careersCount.textContent = careers.length;
}

if (!careers.length) {
    careersList.innerHTML = `
        <p class="careers-empty">
            Career information is not available right now.
            Please try again later.
        </p>
    `;
} else {
    const careerFamilies = {};

    careers.forEach((career) => {
        if (!careerFamilies[career.family]) {
            careerFamilies[career.family] = [];
        }

        careerFamilies[career.family].push(career);
    });

    careersList.innerHTML = Object.entries(careerFamilies)
        .map(([family, familyCareers]) => {
            const careerCards = familyCareers
                .map((career) => `
                    <a
                        href="career.html?id=${encodeURIComponent(career.id)}"
                        class="career-directory-card"
                    >
                        <div class="career-directory-card-icon" aria-hidden="true">
                            ${career.name.charAt(0)}
                        </div>

                        <div class="career-directory-card-content">
                            <h3>${career.name}</h3>
                            <span>Explore career →</span>
                        </div>
                    </a>
                `)
                .join("");

            return `
                <section class="career-family-section">
                    <div class="career-family-heading">
                        <h2>${family}</h2>
                        <span>${familyCareers.length} careers</span>
                    </div>

                    <div class="career-family-grid">
                        ${careerCards}
                    </div>
                </section>
            `;
        })
        .join("");
}