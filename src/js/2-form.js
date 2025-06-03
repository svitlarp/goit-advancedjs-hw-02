import { saveToLS, loadFromLS, cleanLS } from "./localStorage";


const feedbackFormKey = 'feedback-form-state';
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
}
let formData = {
    email: "",
    message: "",
}

// Check if an object with key 'feedback-form-state' exists in LocalStorage
if (loadFromLS('feedback-form-state')) {
    const dataLS = loadFromLS(feedbackFormKey);
    console.log('there is data in local storage');
    refs.feedbackForm.email.value = dataLS.email;
    refs.feedbackForm.message.value = dataLS.message;
}

refs.feedbackForm.addEventListener('input', event => {
    event.preventDefault();
    formData = {
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    }
    saveToLS(feedbackFormKey, formData);
})

refs.feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.message.value);
    if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
        alert('Fill please all fields');
    }
    console.log(formData);
    cleanLS(feedbackFormKey);
    refs.feedbackForm.reset();
})