const displayTime = document.getElementById("displayTime")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")


// function Time() {
//     seconds = new Date().getSeconds()
//     minutes = new Date().getMinutes()
//     hours = new Date().getHours()
//     displayTime.innerHTML = hours + ":" + minutes + ":" + seconds
// }

// setInterval(() => {
//     Time()
// }, 1000);
let [hours,minutes,seconds] = [0,0,0]
let timer = null
stopWatch()
function stopWatch(params) {
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" +hours : hours
    let m = minutes < 10 ? "0" +minutes : minutes
    let s = seconds < 10 ? "0" +seconds : seconds
    displayTime.innerHTML = h + ":" + m + ":" +s
}

start.addEventListener("click", ()=>{
    if (timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(() => {
        stopWatch()
    }, 1000);
})
stop.addEventListener("click", ()=>{
    clearInterval(timer)
})
reset.addEventListener("click", ()=>{
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    displayTime.innerHTML = "00:00:00"
})
