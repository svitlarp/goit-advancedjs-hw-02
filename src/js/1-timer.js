import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "./convertMs";

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    timerEL: document.querySelector('.timer'),
    buttonStartEl: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

// 1 Create flatpickr instance.

let userSelectedDate = "";
let dateNow = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates);
        console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];
        console.log('userSelectedDate:', userSelectedDate);

        console.log('dateNow: ', dateNow);

        // Handle User Date to check that choosen date will be greater then now.
        if (userSelectedDate.getTime() < dateNow.getTime()) {
            window.alert("Please choose a date in the future")
        }
    },
};


const fp = flatpickr("#datetime-picker", options);
console.log(fp);
console.dir(fp);


// Find how many seconds left for some date
const secondsLeft = () => {
    const dateNow = new Date();
    console.log(dateNow);
    const userDate = fp.selectedDates[0];
    const ms = userDate.getTime() - dateNow.getTime();
    const timeLeft = convertMs(ms);
    console.log(timeLeft);
    return timeLeft;
} 


let intervalID = null;

refs.buttonStartEl.addEventListener("click", () => {
    console.log('click Button');
    const res = secondsLeft();
    if (res !== 0) {
        // TODO: ??? Input and start button became inactive
        // refs.inputEl.is-active;
        // refs.buttonStartEl.is-inactive;
        intervalID = setInterval(() => {
            secondsLeft();
        }, 1000);
    } else {
        clearInterval(intervalID);
    }
});

// TODO: використовує метод рядка padStart() і перед відмальовуванням інтерфейсу форматує значення.
function addLeadingZero({days, hours, minutes, seconds}) {
    if (days <= 9 || hours <= 9|| minutes <= 9|| seconds<= 9) {
        refs.days.innerHTML = value.padStart(1, "0");
        refs.hours.innerHTML = value.padStart(1, "0");
        refs.minutes.innerHTML = value.padStart(1, "0");
        refs.seconds.innerHTML = value.padStart(1, "0");
    } 
}









