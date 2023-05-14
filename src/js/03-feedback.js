import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const saveFormDataToLocalStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormDataToLocalStorage);

window.addEventListener('load', () => {
  const storageFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (storageFormData) {
    const parsedFormData = JSON.parse(storageFormData);
    emailInput.value = parsedFormData.email;
    messageInput.value = parsedFormData.message;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem(LOCALSTORAGE_KEY);

  emailInput.value = '';
  messageInput.value = '';
});
