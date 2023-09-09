
const timeDisplay = document.getElementById("time-display");

let num = 0
const startBtn = () => {
    time = setInterval(() =>{
        timeDisplay.innerText = ++ num;
        
    } ,1000)
};
const stopBtn = () => {
    clearInterval(time)
}
const resetBtn = () => {
    timeDisplay.innerText = '0';
}
