let input = document.getElementById('input');

function appendToDisplay(value) {
    input.value += value;
}

function clearDisplay() {
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}
