const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};


let count = 0;
let intervalId = 0;

plusButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 0);
});

minusButton.addEventListener('click', () => {
    intervalId = setInterval(() =>{
        count -= 1;
        updateValue();
    }, 0);
});

resetButton.addEventListener('click', () => {
    count = 1;
    updateValue();
});

document.addEventListener('click'), () => clearInterval(intervalId)