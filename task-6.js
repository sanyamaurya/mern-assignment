document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    // Simulating authentication
    if (username === "testuser" && password === "password123") {
        alert("Login successful!");
        if (rememberMe) {
            localStorage.setItem("username", username);
        }
        // Redirect or handle login success
    } else {
        alert("Invalid username or password.");
    }
});

// Auto-fill username if remembered
window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("rememberMe").checked = true;
    }
};