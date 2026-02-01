const form = document.querySelector("form");
console.log(form);

const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const namePattern = /^[A-Za-z ]+$/;

function validateName(){
    const nameValue = nameInput.value.trim();

    nameError.textContent = "";

    if(nameValue === ""){
        nameError.textContent = "Name is Required";
        return false;
    }
    else if(nameValue.length < 3){
        console.log("Minimum Characters should be three.");
        return false;
    }
    else if(!namePattern.test(nameValue)){
        console.log("Name should contain only letters and spaces");
        return false;
    }
    return true;
}

nameInput.addEventListener("blur" , validateName);

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(){
    const emailValue = emailInput.value.trim();

    emailError.textContext = "";

    if(emailValue === ""){
        console.log("Email can't be empty.")
        return false;
    } 
    else if(!emailPattern.test(emailValue)){
        console.log("Enter a valid email address");
        return false;
    } 

    return true;
}

emailInput.addEventListener("blur" , validateEmail);

const passInput = document.getElementById("password");
const passError = document.getElementById("passError");

const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

function validatePassword(){
    const passValue = passInput.value.trim();

    passError.textContent = "";

    if(passValue === ""){
        console.log("Password can't be empty.");
        return false;
    }
    else if(!passPattern.test(passValue)){
        console.log("Password mut contain 8 characters including Uppercase, Lowercase, Special characters, numbers.");
        return false;
    }

    return true;

}

passInput.addEventListener("blur" , validatePassword);

const confirmInput = document.getElementById("confirm");
const confirmError = document.getElementById("confirmError");

function validateConfirmPassword() {
    const confirmValue = confirmInput.value.trim();
    confirmError.textContent = "";

    if (confirmValue === "") {
        confirmError.textContent = "Please confirm password";
        return false;
    }
    else if (confirmValue !== passInput.value.trim()) {
        confirmError.textContent = "Passwords do not match";
        return false;
    }

    return true;
}

confirmInput.addEventListener("blur" , validateConfirmPassword);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPassValid = validatePassword();
    const isConfirmPassValid = validateConfirmPassword();

    if(isNameValid & isEmailValid & isPassValid & isConfirmPassValid){
        console.log("Form Submitted Successfully")
    }
});

nameInput.classList.add("input-error");
nameInput.classList.remove("input-success");

nameInput.classList.remove("input-error");
nameInput.classList.add("input-success");


