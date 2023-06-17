var stopwatch;
var display = document.getElementById("display");

var milliseconds = 0;
var seconds = 0;
var minutes = 0;

function updateDisplay() {
  display.textContent = getTimeString();
}

function getTimeString() {
  return (
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds)
  );
}

function startStopwatch() {
  if (!stopwatch) {
    stopwatch = setInterval(updateStopwatch, 10);
  }
}

function updateStopwatch() {
  milliseconds += 1;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
  }
  updateDisplay();
}

function stopStopwatch() {
  clearInterval(stopwatch);
  stopwatch = null;
}

function resetStopwatch() {
  stopStopwatch();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

updateDisplay();
