let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let isRunning = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
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
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    isRunning = false;
    clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click', () => {
    isRunning = false;
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
});


updateDisplay();
