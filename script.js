let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const format = (num) => num.toString().padStart(2, '0');
  document.getElementById("display").textContent = 
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function start() {
  if (timer) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function resume() {
  if (!timer) start();
}

function reset() {
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const format = (num) => num.toString().padStart(2, '0');
  const time = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap - ${time}`;
  void lapItem.offsetWidth;
  lapItem.style.animation = 'slideIn 0.4s ease forwards';
  document.getElementById("laps").appendChild(lapItem);
}

updateDisplay();
