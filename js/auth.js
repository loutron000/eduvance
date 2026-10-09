const passwordToggles = document.querySelectorAll("[data-password-toggle]");

passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const inputId = toggle.dataset.passwordToggle;
    const passwordInput = document.getElementById(inputId);

    if (!passwordInput) return;

    const isPasswordHidden = passwordInput.type === "password";

    passwordInput.type = isPasswordHidden ? "text" : "password";

    toggle.textContent = isPasswordHidden ? "Hide" : "Show";
    toggle.setAttribute(
      "aria-label",
      isPasswordHidden ? "Hide password" : "Show password",
    );
    toggle.setAttribute("aria-pressed", String(isPasswordHidden));
  });
});

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const signupMessage = document.getElementById("signupMessage");

    signupMessage.textContent = "";

    if (!name) {
      signupMessage.textContent = "Please enter your full name.";
      return;
    }

    if (!email) {
      signupMessage.textContent = "Please enter your email address.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      signupMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (password.length < 8) {
      signupMessage.textContent =
        "Your password must be at least 8 characters long.";
      return;
    }

    if (password !== confirmPassword) {
      signupMessage.textContent = "Your passwords do not match.";
      return;
    }

    const storageKey = "eduvanceUsers";
    const users = JSON.parse(localStorage.getItem(storageKey)) || [];

    const normalizedEmail = email.toLowerCase();

    const emailExists = users.some((user) => user.email === normalizedEmail);

    if (emailExists) {
      signupMessage.style.color = "#dc2626";
      signupMessage.textContent = "An account with this email already exists.";
      return;
    }

    const newUser = {
      name,
      email: normalizedEmail,
      password,
    };

    users.push(newUser);

    localStorage.setItem(storageKey, JSON.stringify(users));

    signupMessage.style.color = "#0f766e";
    signupMessage.textContent =
      "Account created successfully! You can now sign in.";

    signupForm.reset();
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document
      .getElementById("loginEmail")
      .value.trim()
      .toLowerCase();

    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    loginMessage.style.color = "#dc2626";
    loginMessage.textContent = "";

    const users = JSON.parse(localStorage.getItem("eduvanceUsers")) || [];

    const user = users.find(
      (savedUser) =>
        savedUser.email === email && savedUser.password === password,
    );

    if (!user) {
      loginMessage.textContent =
        "Incorrect email or password. Please try again.";
      return;
    }

    localStorage.setItem(
      "eduvanceCurrentUser",
      JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    );

    loginMessage.style.color = "#0f766e";
    loginMessage.textContent = `Welcome back, ${user.name}!`;

    window.location.href = "dashboard.html";
  });
}

const userNameElement = document.getElementById("user-name");

if (userNameElement) {
  const currentUser = JSON.parse(
    localStorage.getItem("eduvanceCurrentUser")
  );

  if (!currentUser) {
    window.location.replace("login.html");
  } else {
    userNameElement.textContent = currentUser.name;
  }
}



const logoutButton = document.querySelector(".nav-signout");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("eduvanceCurrentUser");

    const homeLink = document.querySelector(".navbar-brand");
    const homePath = homeLink
      ? homeLink.getAttribute("href")
      : "index.html";

    window.location.replace(
      homePath === "dashboard.html" ||
      homePath === "pages/dashboard.html"
        ? "../index.html"
        : homePath
    );
  });
}


const isAuthPage =
  document.getElementById("loginForm") ||
  document.getElementById("signupForm");

if (isAuthPage) {
  const currentUser = JSON.parse(
    localStorage.getItem("eduvanceCurrentUser")
  );

  if (currentUser) {
    window.location.replace("dashboard.html");
  }
}