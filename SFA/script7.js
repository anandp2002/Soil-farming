function adminLogin() {
    // Handle admin login logic here
    console.log("Admin login clicked");
}

function userLogin() {
    // Handle user login logic here
    console.log("User login clicked");
}

document.getElementById("admin-option").addEventListener("click", function() {
    document.getElementById("admin-login").classList.remove("hidden");
    document.getElementById("user-login").classList.add("hidden");
    document.getElementById("admin-option").classList.add("hidden");
    document.getElementById("user-option").classList.add("hidden");
});

document.getElementById("user-option").addEventListener("click", function() {
    document.getElementById("user-login").classList.remove("hidden");
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-option").classList.add("hidden");
    document.getElementById("user-option").classList.add("hidden");
});

function adminLogin() {
    // Validate credentials (replace with your validation logic)
    var adminUsername = document.getElementById("admin-username").value;
    var adminPassword = document.getElementById("admin-password").value;
    if (adminUsername === "admin@gmail.com" && adminPassword === "admin") {
        // Redirect to admin.html
        window.location.href = "admin.html";
    } else {
        alert("Invalid admin credentials");
    }
}

function userLogin() {
    // Validate credentials (replace with your validation logic)
    var userUsername = document.getElementById("user-username").value;
    var userPassword = document.getElementById("user-password").value;
    if (userUsername === "user@gmail.com" && userPassword === "user") {
        // Redirect to admin.html
        window.location.href = "user.html";
    } else {
        alert("Invalid user credentials");
    }
}

