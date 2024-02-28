const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "prjamming" && password === "0v3rth3t0p!") {
        alert("You have successfully logged in.");
        window.location=”http://coordinate-file.html“;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
