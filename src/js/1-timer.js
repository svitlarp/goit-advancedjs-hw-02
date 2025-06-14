import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
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


let userSelectedDate = "";
let dateNow = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];

        // Handle User Date to check that choosen date will be greater then now.
        if (userSelectedDate.getTime() < dateNow.getTime()) {
            iziToast.warning({
                title: 'Your Date in the Past',
                message: 'Please choose a date in the future',
                position: 'topCenter',
            });
            return;
        } else {
            refs.buttonStartEl.classList.remove('disabled');
            refs.buttonStartEl.classList.add('enabled');
        }
    }
};


// 1 Create flatpickr instance.
const fp = flatpickr("#datetime-picker", options);

function addLeadingZero(num) {
    return num.toString().padStart(1, "0");
}


// Find how many seconds left for some date
const secondsLeft = () => {
    const dateNow = new Date();
    const userDate = fp.selectedDates[0];
    const ms = userDate.getTime() - dateNow.getTime();
    const timeLeft = convertMs(ms);
    refs.days.innerHTML = timeLeft.days > 9 ? timeLeft.days : addLeadingZero(timeLeft.days);
    refs.hours.innerHTML = timeLeft.hours > 9 ? timeLeft.hours  : addLeadingZero(timeLeft.hours);
    refs.minutes.innerHTML = timeLeft.minutes > 9 ? timeLeft.minutes : addLeadingZero(timeLeft.minutes);
    refs.seconds.innerHTML = timeLeft.seconds > 9 ? timeLeft.seconds : addLeadingZero(timeLeft.seconds);
    return timeLeft;
} 

let intervalID = null;

refs.buttonStartEl.addEventListener("click", () => {
    const res = secondsLeft();
    if (res !== 0) {
        intervalID = setInterval(() => {
            secondsLeft();
        }, 1000);
    } else {
        clearInterval(intervalID);
    }
});




