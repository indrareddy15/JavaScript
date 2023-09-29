const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function settDate() {
    const now = new Date;

    // console.log(now);
    const getSecond = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const secondDegree = (getSecond / 60) * 360;
    const minuteDegree = (getMinutes / 60) * 360;
    const hourDegree = (getHours / 12) * 360;


    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(settDate, 1000);