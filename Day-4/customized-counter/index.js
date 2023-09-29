const counterFormArea = document.querySelector("form-area");
const counterForm = document.getElementById("counter-form");
const counterEl = document.getElementById("counter");

const counterTitleEl = document.getElementById("conter-title");
const timeElement = document.querySelector("span");
const counterReset = document.getElementById("counter-reset");

const complete = document.getElementById("complete");
const completeInfo = document.getElementById("complete-info");
const completeButton = document.getElementById("complete-button");

const datePicker = document.getElementById("counter-date");

let countDownValue = Date;
let countDownActive = '';

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 60 * hour;

let title = "";
let date = "";

let today = new Date().toISOString().split('T')[0];
console.log(today);

datePicker.setAttribute("min", today);

function updateDom() {
    countDownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownValue - now;
        console.log(distance);
        // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // timeElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);
        // timeElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        console.log(days, hours, minutes, seconds);

        if (distance < 0) {
            counterEl.hidden = true;
            counterFormArea.hidden = true;
            complete.hidden = false;
            clearInterval(countDownActive);
            completeInfo.textContent = `${title} is finished on ${date}`;
        } else {
            timeElement.textContent[0] = days;
            timeElement.textContent[1] = hours;
            timeElement.textContent[2] = minutes;
            timeElement.textContent[3] = seconds;
            counterTitleEl.textContent = title;
            counterFormArea.hidden = true;
            counterEl.hidden = false;
        }

    }, 1000);



    console.log(timeElement.textContent);
}

function updateCountdown(e) {
    e.preventDefault();
    title = e.srcElement[0].value;
    date = e.srcElement[1].value;

    const savedCountDown = {
        title: title,
        date: date,
    }

    localStorage.setItem("savedcountdown", JSON.stringify(savedCountDown));

    console.log(title, date);
    if (date === "") {
        alert("Please enter a valid date");
    } else {
        countDownValue = new Date(date).getTime();
        console.log(countDownValue);
        updateDom();
    }
}

function reset() {
    counterEl.hidden = true;
    complete.hideen = true;
    clearInterval(countDownActive);
    title = ''
    date = ''
    counterFormArea.hidden = false;
}

function restoreCountDown() {
    if (localStorage.getItem('savedcountdown')) {
        counterFormArea.hidden = true;
        let countDownData = localStorage.getItem('savedcountdown');
        title = countDownData;
        date = countDownData;
        countDownValue = new Date(date).getTime();
        updateDom();
    }
}

counterForm.addEventListener("submit", updateCountdown);
counterReset.addEventListener("click", reset);
completeButton.addEventListener("click", complete);
