import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector('[data-start]');
const daysNode = document.querySelector('[data-days]');
const hoursNode = document.querySelector('[data-hours]');
const minutsNode = document.querySelector('[data-minutes]');
const secondsNode = document.querySelector('[data-seconds]');


startBtn.setAttribute('disabled', true);
let chosenDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDate = selectedDates[0].getTime();
      if (chosenDate < Date.now()) {
          Notify.failure("Please choose a date in the future");
        } else {
        startBtn.removeAttribute('disabled');
        }

  },
};
flatpickr("#datetime-picker", options);

let diferentTime = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    let seconds = Math.floor((((ms % day) % hour) % minute) / second);
    // console.log({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
    // console.log({ days, hours, minutes, seconds });
    daysNode.textContent = String(days).padStart(2, '0');
    hoursNode.textContent = String(hours).padStart(2, '0');
    minutsNode.textContent = String(minutes).padStart(2, '0');
    secondsNode.textContent = String(seconds).padStart(2, '0');
};

startBtn.addEventListener("click", () => {
    const timerId = setInterval(() => {
        diferentTime = chosenDate - Date.now();
        // console.log(diferentTime);
        // convertMs(diferentTime);
        addLeadingZero(convertMs(diferentTime));
    }, 1000);
});