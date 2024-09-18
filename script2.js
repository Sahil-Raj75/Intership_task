// script.js
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function delete1() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentInput;
    }
}
function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear after showing error
    }
}