import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const elements = {
    timerContainer: document.querySelector('.timer'),
    fieldContainer: document.querySelectorAll('.field'),
    fieldValue: document.querySelectorAll('.value'),
    fieldLabel: document.querySelectorAll('.label'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

elements.timerContainer.style.display = 'flex';
elements.timerContainer.style.gap = '10px';

elements.fieldContainer.forEach(element => {
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'space-between';
})

elements.fieldValue.forEach(element => {
    element.style.display = 'flex';
    element.style.fontSize = '35px';
})


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const userDate = selectedDates[0].getTime();
        const currentDate = options.defaultDate.getTime();
        if (userDate < currentDate) {
            // window.alert("Please choose a date in the future");
            Notiflix.Notify.failure('Please choose a date in the future');
            elements.startBtn.disabled = true;
        } else {
            elements.startBtn.disabled = false;
        }
    },
};

const calendar = flatpickr("#datetime-picker", options);

elements.startBtn.addEventListener('click', startBtnClick);
elements.startBtn.disabled = true;

function startBtnClick() {
    const intervalId = setInterval(() => {
        const userDate = calendar.selectedDates[0].getTime();
        // const currentDate = options.defaultDate.getTime();
        const currentDate = new Date().getTime();
        const ms = userDate - currentDate;
        elements.days.textContent = convertMs(ms).days;
        elements.hours.textContent = convertMs(ms).hours;
        elements.minutes.textContent = convertMs(ms).minutes;
        elements.seconds.textContent = convertMs(ms).seconds;

        if (ms <= 0) {
            clearInterval(intervalId);
        }
    }, 1000)

}


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
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return {
        days: addLeadingZero(days),
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes),
        seconds: addLeadingZero(seconds),
    };
}


function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}



