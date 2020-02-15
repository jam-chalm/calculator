//Hello, world!
//JavaScript for calculator

//Variables
let calcArray = []
let operatorArray = ["+", "-", "*", "/"];
let equationValue = "";
let displayValue = "";
var first;
var second;
var operator;
var firstOrSecond = 1;

//Query Selectors
const equationDiv = document.getElementById("equation");
const numberDiv = document.getElementById("number");
const allKeys = document.getElementsByClassName("keys");
const dotButton = document.getElementById("period");

allKeys.onclick = function() {
    calcArray.push(allKeys.value);
    math();
}


//Functions
function add(x, y)
{
    return (x + y);
}
function subtract(x, y)
{
    return (x - y);
}
function multiply(x, y)
{
    return (x * y);
}
function divide(x, y)
{
    return (x / y);
}

//Display function
display = () => {
    numberDiv.innerHTML = displayValue;
    equationDiv.innerHTML = equationValue;
}

operate = (num1, num2, whichOne) => {
    return whichOne == "+" ? add(num1, num2)
        : whichOne == "-" ? subtract(num1, num2)
            : whichOne == "*" ? multiply(num1, num2)
                : whichOne == "/" ? divide(num1, num2)
                    : null;
}

math = () => {
    if (operatorArray.includes(calcArray[calcArray.length - 1])) {
        first = parseInt(displayValue);
        operator = calcArray[calcArray.length - 1];
        firstOrSecond = 2;
        equationValue = calcArray.toString;
        displayValue = "";
        display();
    }
    else if (calcArray[calcArrayy.length - 1] == "=") {
        var findSecond = "";
        for (var i = 0; i < calcArray.length; i++)
            findSecond = findSecond + calcArray[i];
        second = parseInt(findSecond.substring(findSecond.indexOf(operator) + 1, findSecond.length() - 1))
        numberDiv.innerHTML = operate(first, second, operator);
        first = operate(first, second, operator);
        firstOrSecond = 1;
        displayValue = parseInt(first);
        equationValue = calcArray.toString;
        equationValue = equationValue.substring(0, equationValue.length() - 1);
        display();
    }
    else
        displayValue = displayValue + calcArray[calcArray.length - 1];
        display();
}

clear = () => {
    displayValue = "";
    equationValue = "";
    first = 0;
    second = 0;
    operator = "";
    firstOrSecond = 1;
    calcArray = [];
    equationDiv.innerHTML = equationValue;
    numberDiv.innerHTML = displayValue;
}