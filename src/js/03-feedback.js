import throttle from 'lodash.throttle';

const emailTextInput = document.querySelector('input');

const messageTextarea = document.querySelector('textarea');

const form = document.querySelector('form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

populateTextarea();

form.addEventListener('input', throttle(handlerInputTextarea, 500));

form.addEventListener('submit', handlerSubmitTextarea);

const dataForm = {};

function handlerInputTextarea(event) {
  dataForm[event.target.name] = event.target.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
  console.log(dataForm);
}

function handlerSubmitTextarea(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function populateTextarea() {
  const savedMassage = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedMassage = JSON.parse(savedMassage);

  if (parsedMassage) {
    Object.keys(parsedMassage).map(element => {
      document.querySelector(`[name='${element}']`).value =
        parsedMassage[element];
      
    });
    
  }
}
