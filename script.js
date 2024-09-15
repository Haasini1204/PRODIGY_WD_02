let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapsList = document.getElementById("laps");

function formatTime() {
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    timerElement.textContent = formatTime();
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerElement.textContent = formatTime();
  lapsList.innerHTML = "";
}

function addLap() {
  const lapTime = formatTime();
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

startButton.addEventListener("click", () => {
  startTimer();
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
});

pauseButton.addEventListener("click", () => {
  pauseTimer();
  startButton.disabled = false;
  pauseButton.disabled = true;
});

resetButton.addEventListener("click", () => {
  resetTimer();
  startButton.disabled = false;
  pauseButton.disabled = true;
});

lapButton.addEventListener("click", () => {
  addLap();
});