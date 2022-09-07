"use strict";

const form = document.querySelector(".container__content__form");
const email = document.querySelector(".container__content__form__email");
const error = document.querySelector(".container__content__form__email--error");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validateEmail(email.value)){
        showV(email);
    }else{
        e.preventDefault();
        showError(email);
    }
});

const validateEmail = email => {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return expReg.test(email);
}

const showError = (input) =>{
    input.style.border = '1px solid red';
    input.style.backgroundImage = 'url("./images/icon-error.svg")';
    error.innerHTML = "Please provie a valid email";
}

const showV = input => {
    input.style.border = '1px solid hsl(0, 36%, 70%)'
    input.style.backgroundImage = 'url("")';
    error.innerHTML = "";
}