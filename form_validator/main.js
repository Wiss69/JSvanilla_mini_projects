const userInput = document.querySelector('input[id="username"]');
const emailInput = document.querySelector('input[id="email"]');
const passwordInput = document.querySelector('input[id="password"]');
const password2Input = document.querySelector('input[id="password2"]');


// Event listener
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    //console.log(userInput);
    // Test 
    checkRequired([userInput, emailInput, passwordInput, password2Input]);
    checkLength(userInput, 3, 12);
    checkLength(passwordInput, 6, 24);
    checkEmail(emailInput);
    checkPasswordsMatch(passwordInput,password2Input);
});

function checkRequired(inputArray) {

    inputArray.forEach(input => {
        if(input.value.trim() === '') {
            showErrorMessage(`Le champs ${getInputFieldName(input)} est requis`,input)
        }
        else {
            showSuccess(input);
        }
    });
}

function checkLength (input, min, max) {

        if(input.value.length >= min) {
            showSuccess(input);
        }
        else {
            showErrorMessage(`Le ${getInputFieldName(input)} doit contenir au moins ${min} caractères`, input);
        }

        if(input.value.length <= max) {
            showSuccess(input);
        }
        else {
            showErrorMessage(`Le ${getInputFieldName(input)} ne doit contenir plus de ${max} caractères`, input);
        }
}

function checkEmail (email) {
    const regexp = /^[\w.]+@[a-z0-9-_.]{2,}\.[a-z]{2,4}$/
    const check = regexp.test(email.value);
    if(!check) {
        showErrorMessage('L\'email saisi est incorrect', email);
    }
    else {
        showSuccess(email);
    }
}

function checkPasswordsMatch (pass1, pass2) {
    if(pass1.value !== pass2.value) {
        showErrorMessage('Les mots de passe ne correspondent pas.', password2Input);
    }
}

function showErrorMessage (message, inputField) {

    const parentEl = inputField.parentElement;
    parentEl.classList.add('error');
    //console.log(parentEl);
    const errorEl = parentEl.lastChild.previousSibling;
    errorEl.textContent = message;
    //console.log(errorEl);
}

function getInputFieldName (input) {
    //console.log(input.previousSibling.previousElementSibling.textContent);
    return input.previousSibling.previousElementSibling.textContent;
}

function showSuccess(input) {
    input.parentElement.classList.add('success');
}