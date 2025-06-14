import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


iziToast.info({
  title: 'Hello',
  message: 'Welcome!',
  position: 'topRight',
});


const refs = {
  formEl: document.querySelector('.form'),
  buttonEl: document.querySelector('button'),
}

let formData = {};

function generatePromises(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
    });
}


refs.formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;
  
  if (delay === "" || state === "") {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topRight',
    }); 
    return;
  } else {
    generatePromises(delay, state)
      .then(message => {
        iziToast.success({
          title: 'Ok',
          message: message,
          position: 'topRight',
        });
    })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: error,
          position: 'topRight',
        });
    });
  }

  console.log(`Login: ${delay}, Password: ${state}`);
  refs.formEl.reset();
}



