const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const container = document.querySelector('.container');
const smContainer = document.querySelector('.sm-container');

// Form event listener 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

// Set error function
function setError(input, message) {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');

    errorDisplay.innerText = message;
    inputControl.className = 'input-control error'
}

// Set success function
function setSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success';
}

// Validate input function
function validateInput() {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        setError(emailInput, 'Please provide a valid email');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Valid email required');
    } else {
        setSuccess(emailInput);
        container.style.display = 'none';
        smContainer.style.display = 'flex';
        const span = document.querySelector('span');
        span.innerText = emailValue;
    }
}

// Dismmiss message function
function dismissMsg() {
    smContainer.style.display = 'none';
    container.style.display = 'flex';
}

// Check if email is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}