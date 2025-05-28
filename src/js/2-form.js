import { saveToLS, loadFromLS } from "./localStorage";
import lsObj from "./localStorage";
import * as localStorageApi from "./localStorage";

// console.log(loadFromLS);
console.log(lsObj);
console.log(localStorageApi);

// lsObj.load('product-info');

const refs = {
    readLSbtn: document.querySelector('.js-read-localStorage-btn'), 
}
console.dir(refs.readLSbtn);

const product = {
    name: "panel",
    size: "45.6mm"
}
saveToLS('product-info', product);

refs.readLSbtn.addEventListener('click', event => {
    const dataFromLS = loadFromLS('product-info');
    if (dataFromLS === null) {
        return;
    }
    console.log(dataFromLS);
})