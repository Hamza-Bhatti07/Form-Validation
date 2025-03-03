function validateSignIn() {
    let username = document.getElementById("signinUsername").value.trim();
    let password = document.getElementById("signinPassword").value.trim();
    let usernameError = document.getElementById("signinUsernameError");
    let passwordError = document.getElementById("signinPasswordError");

    usernameError.textContent = username === "" ? "Username is required" : "";
    passwordError.textContent = password === "" ? "Password is required" : "";
}

function validateSignUp() {
    let username = document.getElementById("signupUsername").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let age = document.getElementById("signupAge").value.trim();
    let phone = document.getElementById("signupPhone").value.trim();

    let usernameError = document.getElementById("signupUsernameError");
    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");
    let ageError = document.getElementById("signupAgeError");
    let phoneError = document.getElementById("signupPhoneError");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    let phoneRegex = /^[0-9]{10}$/;

    usernameError.textContent = username === "" ? "Username is required" : "";
    emailError.textContent = !emailRegex.test(email) ? "Invalid email format" : "";
    passwordError.textContent = !passwordRegex.test(password) ? "Password must contain a number and a special character" : "";
    ageError.textContent = (age < 18 || age > 100) ? "Age must be between 18 and 100" : "";
    phoneError.textContent = !phoneRegex.test(phone) ? "Invalid phone number" : "";
}
