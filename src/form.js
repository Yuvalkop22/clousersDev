let firstNameText = document.getElementById("firstName").value;
let lastNameText = document.getElementById("lastName").value;
let emailText = document.getElementById("email").value;
let ageText = document.getElementById("age").value;
let errorFirstNameText = document.getElementById('errorFirstName');
let errorLastNameText = document.getElementById('errorLastName');
let errorEmailText = document.getElementById('errorEmail');
let errorAgeText = document.getElementById('errorAge');
function formManagement(formBody,onSubmit){
    return{
        onSubmit: onSubmit(),
        isValid: boolean,
        onResetForm: onResetForm()
    }

}

function submit(){
    if (firstNameText.length < 2){
        errorFirstNameText.innerText = "first name must be at least 2 characters"
        return false;
    }
    if (lastNameText.length < 2){
        errorLastNameText.innerText = "first name must be at least 2 characters"
        return false;
    }
    if (isNaN(ageText)){
        errorAgeText.innerText = "Age must be numbers only"
        return false;
    }
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailText.match(validRegex)){
        errorEmailText.innerText = "wrong email convention"
        return false;
    }
    if (firstNameText.length > 2 && lastNameText.length > 2 && !isNaN(ageText) && emailText.match(validRegex)){
        return true;
    }   
}