// LocalStorage has limited memory, If we write more than there is memory (more than 5 GB) -> truble
export const saveToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }    
}

export const loadFromLS = key => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err);
    }
}

const num1 = 10;
export const num2 = 20;

export default {
    save: saveToLS,
    load: loadFromLS,
};