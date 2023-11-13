//if field  is selected return length of 
//if length > 8 change the color of border-bottom to green-blue like
//else add a exclamation mark right of the field with the message 'passwrod must be 8 characters or longer'

let password = document.querySelector("#pass");
let passerr = document.querySelector("#passerr");
let tel = document.querySelector("#tel");
let telerr = document.querySelector("#telerr");
let mailerr = document.querySelector("#mailerr");
let mail = document.querySelector("#mail");

password.addEventListener("keyup",voice);
tel.addEventListener("keyup",telcheck);
mail.addEventListener("keyup",mailcheck);

function voice(){
    if(password.value.length < 8){
        passerr.innerHTML = "! The password must be at least 8 characters long!";
    }else{
        passerr.innerHTML = "";
    }
}

function telcheck(){
    if(tel.value.length != 10){
        telerr.innerHTML = "! The phone number must be exactly 10 digits.";
    }else{
        telerr.innerHTML = "";
    }
}

function mailcheck(){
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(mail.value.match(valid)){
        mailerr.innerHTML = "";
    }else{
        mailerr.innerHTML = "! Your email needs to be of the form example@vendor.com."
    }
}