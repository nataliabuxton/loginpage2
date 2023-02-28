const signUp = document.getElementById("signUpBtn");
const logIn = document.getElementById("logInBtn");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title")

logIn.onclick = function(){
    document.getElementById("title").innerHTML="COME IN..";
    emailField.style.maxHeight= "0";
    preventDefault();
};
signUp.onclick = function(){
    document.getElementById("title").innerHTML="JOIN US..";
    emailField.style.maxHeight="100%"
    preventDefault();
};