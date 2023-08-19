const elements = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}
let timerId = null;

function intervalClickStart() {
    // elements.startBtn.disabled = true;
    // elements.stopBtn.disabled = false;

    timerId = setInterval(() => {
        elements.startBtn.disabled = true;
        elements.stopBtn.disabled = false;
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)

};



function intervalClickStop() {
    elements.startBtn.disabled = false;
    elements.stopBtn.disabled = true;

    clearInterval(timerId);
};


elements.startBtn.addEventListener('click', intervalClickStart);
elements.stopBtn.addEventListener('click', intervalClickStop);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


