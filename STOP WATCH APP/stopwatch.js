let timer;
let milliseconds = 0, seconds = 0, minutes = 0;
let running = false;

function updateTime() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("time").innerText =
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (milliseconds < 100 ? "0" : "") + milliseconds;
}

function start() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
    }
}

function stop() {
    running = false;
    clearInterval(timer);
}

function reset() {
    stop();
    milliseconds = seconds = minutes = 0;
    document.getElementById("time").innerText = "00:00:000";
}