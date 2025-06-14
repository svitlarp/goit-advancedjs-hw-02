const refs = {
  formEl: document.querySelector('.form'),
  buttonEl: document.querySelector('button'),
}

let formData = {};

function generatePromises() {
  return new Promise((resolve, reject) => {

    refs.formEl.addEventListener('change', () => {
      const formData = {
        delay: refs.formEl.delay.value,
        howResolvePromise: refs.formEl.state.value,
      }
    });

    refs.buttonEl.addEventListener('click', event => {
      event.preventDefault();
      console.log(event.target.value);
      console.log(formData.howResolvePromise);
      console.log(formData.delay);
    
      setTimeout(() => {
        if (formData.howResolvePromise === "fulfilled") {
          resolve(`Fulfilled promise in ${formData.delay}ms`);
        } else {
          reject(`Rejected promise in ${formData.delay}ms`);
        }
      }, formData.delay);
      
    });
  });
}


generatePromises()
.then(message => console.log(message))
.catch(errorMessage => console.log(errorMessage));


