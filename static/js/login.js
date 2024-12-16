document.querySelector('.password-toggle').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const toggleText = this.querySelector('span');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleText.textContent = 'Hide'; 
    } else {
        passwordInput.type = 'password';
        toggleText.textContent = 'Show'; 
    }
});

let Login = "false"; 
const userInput = document.getElementById("fiscal-code");
const passwordInput = document.getElementById("password");

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(userInput.value);
    console.log(passwordInput.value);
    if (userInput.value && passwordInput.value) {
        console.log("User found");
        Login = "true"; 
        localStorage.setItem("storageName", Login);
        window.location.replace("index.html");
    } 
});
