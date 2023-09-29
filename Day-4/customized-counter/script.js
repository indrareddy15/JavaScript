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
let countDownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let title = "";
let date = "";

let today = new Date().toISOString().split("T")[0];

datePicker.setAttribute("min", today);

function updateDom() {
    countDownActive = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownValue - now;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);


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
            timeElement.textContent = `${days} ${hours} ${minutes} ${seconds}`
            counterTitleEl.textContent = title;
            counterFormArea.hidden = true;
            counterEl.hidden = false;
        }
    }, 1000);
}

function updateCountdown(e) {
    e.preventDefault();
    title = e.srcElement[0].value;
    date = e.srcElement[1].value;

    const savedCountDown = {
        title: title,
        date: date,
    };

    localStorage.setItem("savedcountdown", JSON.stringify(savedCountDown));

    if (date === "") {
        alert("Please enter a valid date");
    } else {
        countDownValue = new Date(date).getTime();
        updateDom();
    }
}

function reset() {
    localStorage.removeItem('countdown')
    counterEl.hidden = true;
    complete.hideen = true;
    clearInterval(countDownActive);
    title = "";
    date = "";
    counterFormArea.hidden = false;
}

function restoreCountdown() {
    if (localStorage.getItem("countdown")) {
        counterFormArea.hidden = true;
        let countDownData = localStorage.getItem("countdown");
        title = countDownData;
        date = countDownData;
        countDownValue = new Date(date).getTime();
        updateDom();
    }
}

counterForm.addEventListener("submit", updateCountdown);
counterReset.addEventListener("click", reset);
completeButton.addEventListener("click", reset);

restoreCountdown();