var minutes = 25
var seconds = 0
var timer
var running = false
var breaks = 0

function setFormat() {
    var nminutes = minutes.toString().padStart(2, 0)
    var nseconds = seconds.toString().padStart(2, 0)

    document.getElementById("counter").innerHTML = nminutes + ":" + nseconds
}

function pauseName() {
    if (running = true) {
        document.getElementById("pause").innerHTML = "Pause"
    }
}

function myTimer() {
    if (minutes == 0 && seconds == 0) {
        pauseUnpause()
    } else { seconds-- }

    if (seconds < 0) {
        seconds = 59
        minutes--
    }
    setFormat()
}

function pauseUnpause() {
    if (running == true) {
        clearInterval(timer)
        running = false
        document.getElementById("pause").innerHTML = "Unpause"
    } else {
        setTimer()
        document.getElementById("pause").innerHTML = "Pause"
    }
}

function setTimer() {
    if (running == false) {
        timer = setInterval(myTimer, 1000)
        running = true
        pauseName()
    }
}

function startCounter() {
    minutes = 25
    seconds = 0
    setTimer()
    setFormat()
}

function shortBreak() {
    minutes = 5
    seconds = 0
    setTimer()
    setFormat()
    breaks++
}

function longBreak() {
    minutes = 10
    seconds = 0
    setTimer()
    setFormat()
    breaks = 0
}

function shortOrLong() {
    if (breaks >= 3) {
        longBreak()
    } else {
        shortBreak()
    }
}

setFormat()