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
        console.log(selectedDates);
        console.log(selectedDates[0]);
        userSelectedDate = selectedDates[0];
        console.log('userSelectedDate:', userSelectedDate);

        console.log('dateNow: ', dateNow);

        // Handle User Date to check that choosen date will be greater then now.
        if (userSelectedDate.getTime() < dateNow.getTime()) {
            iziToast.warning({
                title: 'Your Date in the Past',
                message: 'Please choose a date in the future',
                position: 'topCenter',
            });
            
            // TODO: Button Start became inactive
            // buttonStartEl.is-inactive
        } else {
            // TODO: Button Start became active
            // buttonStartEl.is-active
        }
    },
};

// 1 Create flatpickr instance.
const fp = flatpickr("#datetime-picker", options);
console.log(fp);
console.dir(fp);


function addLeadingZero(num) {
    return num.toString().padStart(2, "0");
}
console.log(addLeadingZero(8));

// Find how many seconds left for some date
const secondsLeft = () => {
    const dateNow = new Date();
    console.log(dateNow);
    const userDate = fp.selectedDates[0];
    const ms = userDate.getTime() - dateNow.getTime();
    const timeLeft = convertMs(ms);
    console.log(timeLeft);
    console.log(timeLeft.days.toString().padStart(1, "0"));
    console.log(typeof timeLeft.days);
    refs.days.innerHTML = timeLeft.days > 9 ? timeLeft.days : addLeadingZero(timeLeft.days);
    refs.hours.innerHTML = timeLeft.hours > 9 ? timeLeft.hours  : addLeadingZero(timeLeft.hours);
    refs.minutes.innerHTML = timeLeft.minutes > 9 ? timeLeft.minutes : addLeadingZero(timeLeft.minutes);
    refs.seconds.innerHTML = timeLeft.seconds > 9 ? timeLeft.seconds : addLeadingZero(timeLeft.seconds);
    return timeLeft;
} 

let intervalID = null;

refs.buttonStartEl.addEventListener("click", () => {
    console.log('click Button');
    // TODO: Button Start became inactive
    // buttonStartEl.is-inactive
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
// function addLeadingZero({days, hours, minutes, seconds}) {
//     if (days <= 9 || hours <= 9|| minutes <= 9|| seconds<= 9) {
//         refs.days.innerHTML = value.padStart(1, "0");
//         refs.hours.innerHTML = value.padStart(1, "0");
//         refs.minutes.innerHTML = value.padStart(1, "0");
//         refs.seconds.innerHTML = value.padStart(1, "0");
//     } 
// }






// 1 Button active -> inactive
// 3 function addLeadingZero



