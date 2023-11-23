import throttle from "lodash.throttle";


const formA = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');

const feedbackForm = 'feedback-form-state';

function formInput(evt){
    const message = evt.target.value
    localStorage.setItem(feedbackForm, message)
}
function formSubmit(evt){
   evt.preventDefault();
   console.log(form)
}

formA.addEventListener('submit', formSubmit);
textArea.addEventListener('input', throttle(formInput, 500));
