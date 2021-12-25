const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

firstName.addEventListener('keyup', (e) => {
    if (!firstName.value) {
        onError('firstName', 'firstNameError', 'error-1');
    } else {
        reset('firstName', 'firstNameError', 'error-1');
    }
})

lastName.addEventListener('keyup', (e) => {
    if (!lastName.value) {
        onError('lastName', 'lastNameError', 'error-2');
    } else {
        reset('lastName', 'lastNameError', 'error-2');
    }
})

email.addEventListener('keyup', (e) => {
    if (!email.value || !email.value.includes('@')) {
        onError('email', 'emailError', 'error-3');
        email.placeholder = "email@example/com";
    } else {
        reset('email', 'emailError', 'error-3');
    }
})

password.addEventListener('keyup', (e) => {
    if (!password.value) {
        onError('password', 'passwordError', 'error-4');
    } else {
        reset('password', 'passwordError', 'error-4');
    }
})

function reset(inputElId, errElId, iconElId) {
    const inputEl = getDocument(inputElId);
    const errEl = getDocument(errElId);
    const iconEl = getDocument(iconElId);

    inputEl.style.border = "2px solid hsl(248, 32%, 49%)";
    errEl.style.display = "none";
    iconEl.style.display = "none";
    form.style.rowGap = "20px";

    if (inputElId == "email") inputEl.placeholder = "Email Address";
}

function onError(inputElId, errElId, iconElId) {
    const inputEl = getDocument(inputElId);
    const errEl = getDocument(errElId);
    const iconEl = getDocument(iconElId);

    inputEl.style.border =  "2px solid red";
    errEl.style.display = "inline";
    iconEl.style.display = "inline";
    form.style.rowGap = "8px";
}

function getDocument(id) {
    return document.getElementById(id);
}
