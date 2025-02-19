//Primitive / value types.
//References Types. - Objects, Arrays, Functions.
//Arrays and Functions are objects.

//Hoisting

//const, let, var 


const calcscreen = document.getElementById("calcscreen");

function appendToDisplay(input) {
    calcscreen.value += input;

}

function clearDisplay() {
    calcscreen.value = "";
}

function calculate() {

    try {
    calcscreen.value = eval(calcscreen.value);
    } catch(error) {
        clearDisplay.value = "Error";
    }
}