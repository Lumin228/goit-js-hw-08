import throttle from "lodash.throttle";

const formA = document.querySelector('.feedback-form');
const textArea = formA.querySelector('textarea');
const formEmail = formA.querySelector('input[name="email"]');

const feedbackForm = 'feedback-form-state';

function formInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(feedbackForm, JSON.stringify({ email: formEmail.value, message }));
}

function formInputEmail(evt) {
    const email = evt.target.value;
    localStorage.setItem(feedbackForm, JSON.stringify({ email, message: textArea.value }));
}

function formSubmit(evt) {
    evt.preventDefault();

    const textAreaMessage = localStorage.getItem(feedbackForm);
    const data = JSON.parse(textAreaMessage) || {}; // Parse the stored JSON or use an empty object
    console.log(data);

    localStorage.clear();
    textArea.value = ''; // Clear the textarea
    formEmail.value = ''; // Clear the email input
}

function reloadPage() {
    const storedData = localStorage.getItem(feedbackForm);
    if (storedData) {
        const { email, message } = JSON.parse(storedData);
        textArea.value = message;
        formEmail.value = email;
    }
}

formA.addEventListener('submit', formSubmit);
formA.addEventListener('input', throttle(formInputEmail, 500));
textArea.addEventListener('input', throttle(formInput, 500));
reloadPage();
