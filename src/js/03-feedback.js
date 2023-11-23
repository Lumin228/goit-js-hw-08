const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const inputEmail = document.querySelector('.feedback-form input[type="email"]');

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', onTextareaInput);
inputEmail.addEventListener('input', onInputEmail);

const LOCAL_SAVE = "feedback-form-state";

const storedData = localStorage.getItem(LOCAL_SAVE);
const convert = storedData ? JSON.parse(storedData) : null;

let data = {
  email: "",
  message: "",
};


function checkAndFillFormFields() {


 
  if (convert) {
    inputEmail.value = convert.email;
    textarea.value = convert.message;
    data = convert;
  }
}



function onFormSubmit(evt) {
    evt.preventDefault();
    if(data.email && data.message){
        console.log(data);
        localStorage.clear();
        form.reset(); 
        data = { email: "", message: "" }; 
    }
    else{
        alert('Please fill an email and message');
    }
}

function onTextareaInput(evt) {
  const value = evt.target.value; 
  data.message = value;
  localStorage.setItem(LOCAL_SAVE, JSON.stringify(data));
}

function onInputEmail(evt) {
  const value = evt.target.value; 
  data.email = value;
  localStorage.setItem(LOCAL_SAVE, JSON.stringify(data));
}

checkAndFillFormFields()