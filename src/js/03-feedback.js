import throttle from "lodash.throttle";

const formA = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');

const feedbackForm = 'feedback-form-state';

function formInput(evt){
    const message = evt.target.value;
    localStorage.setItem(feedbackForm, message);
}

function formSubmit(evt){
   evt.preventDefault();
   const formEmail = formA.querySelector('input[name="email"]').value;
   const textAreaMessage = localStorage.getItem(feedbackForm);
   const data = {
    email:  formEmail,
    message: textAreaMessage,
   };
   console.log(data);
   localStorage.clear();
   evt.target.reset();
}

function reloadPage(){
    const lastMessage = localStorage.getItem(feedbackForm);
    if(lastMessage){
        textArea.value = lastMessage;
    }
}

formA.addEventListener('submit', formSubmit);
textArea.addEventListener('input', throttle(formInput, 500));
reloadPage();
