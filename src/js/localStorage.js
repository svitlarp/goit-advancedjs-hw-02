// LocalStorage has limited memory, If we write more than there is memory (more than 5 GB) -> truble
export function saveToLS(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
}

export function loadFromLS(key, value) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.log(err);
    }
}

export function cleanLS(key) {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log(err);
    }
}