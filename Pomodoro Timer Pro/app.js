
const workbtn = document.getElementById("workbtn");
const breakbtn = document.getElementById("breakbtn");
const Maintimer = document.getElementById("timer");
const StartTimer = document.getElementById("start-btn");
const ResetTimer = document.getElementById("reset-btn");

let seconds = 0;
let minutes = 25;
let Maintime = null;
let isRunning = false;
let currentModeMinutes = 25;

function updateDisplay() {
    let displaySec = seconds.toString().padStart(2, '0');
    let displayMin = minutes.toString().padStart(2, '0');
    Maintimer.innerHTML = `${displayMin}:${displaySec}`;
}

function stopTimer() {
    clearInterval(Maintime);
    isRunning = false;
    StartTimer.innerText = "Start";
    StartTimer.style.backgroundColor = "#4ecdc4";
}


workbtn.addEventListener("click", () => {
    stopTimer();
    currentModeMinutes = 25;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    workbtn.classList.add("active");
    breakbtn.classList.remove("active");
});

breakbtn.addEventListener("click", () => {
    stopTimer();
    currentModeMinutes = 5;
    minutes = 5;
    seconds = 0;
    updateDisplay();
    breakbtn.classList.add("active");
    workbtn.classList.remove("active");
});


StartTimer.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        StartTimer.innerText = "Pause";
        StartTimer.style.backgroundColor = "#ffa500";

        Maintime = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    stopTimer();
                    alert("Time's up!");
                    return;
                }
                seconds = 59;
                minutes -= 1;
            } else {
                seconds -= 1;
            }
            updateDisplay();
        }, 1000);
    } else {
        stopTimer();
    }
});


ResetTimer.addEventListener("click", () => {
    stopTimer();

    minutes = currentModeMinutes;
    seconds = 0;
    updateDisplay();
});


function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
            <span onclick="this.parentElement.classList.toggle('completed')">${input.value}</span>
            <button onclick="this.parentElement.remove()" style="background:none; color:red; border:none; cursor:pointer;">✕</button>
        `;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}





















