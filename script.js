document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm form");
    const registerForm = document.querySelector("#registerForm form");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    // Switch between login and register forms
    showRegister.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "block";
    });

    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });

    // Login form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value.trim();

        // Retrieve stored user credentials
        const storedUser = localStorage.getItem("registeredUser");
        const storedPass = localStorage.getItem("registeredPass");

        if (username === storedUser && password === storedPass) {
            alert("Login successful!");
        } else {
            alert("Incorrect username or password. Please try again.");
        }
    });

    // Register form validation
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = registerForm.querySelector("input[type='text']").value.trim();
        const email = registerForm.querySelector("input[type='email']").value.trim();
        const password = registerForm.querySelector("input[type='password']").value.trim();
        const confirmPassword = registerForm.querySelectorAll("input[type='password']")[1].value.trim();

        // Check if fields are empty
        if (!username || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store user credentials in local storage
        localStorage.setItem("registeredUser", username);
        localStorage.setItem("registeredPass", password);

        alert("Registration successful! You can now log in.");

        // Redirect to login form after successful registration
        document.getElementById("registerForm").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    });
});

