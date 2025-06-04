// LocalStorage has limited memory, If we write more than there is memory (more than 5 GB) -> truble
function saveToLS(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
}

function loadFromLS(key, value) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err);
    }
}

function cleanLS(key) {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log(err);
    }
}


const feedbackFormKey = 'feedback-form-state';
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
}
let formData = {
    email: "",
    message: "",
}

// Check if an object with key 'feedback-form-state' exists in LocalStorage -> fill form fileds and save to formData variable if exists
const dataLS = loadFromLS(feedbackFormKey);
if (dataLS) {
    refs.feedbackForm.email.value = dataLS.email || "";
    refs.feedbackForm.message.value = dataLS.message || "";
    formData = { ...dataLS };
}

// Listen for input, save new user input to the LocalStorage
refs.feedbackForm.addEventListener('input', event => {
    event.preventDefault();
    formData = {
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    }
    saveToLS(feedbackFormKey, formData);
});

// Listen Submit Event - in case that all fields are filled -> reset form, clean LocalStorge
refs.feedbackForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.elements.email.value === "" || event.target.elements.message.value === "") {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        cleanLS(feedbackFormKey);
        refs.feedbackForm.reset();
    }
});
