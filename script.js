function addition (num1, num2){
    return num1+num2;
}

function substraction (num1, num2){
    return num1-num2;
}

function multiplication(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function update(){
    previewDiv.textContent = (num1 + operator + num2);
    resultDiv.textContent = result;
}


let operator = "";
let num1 = "";
let num2 = "";
let result = "";
let operationString = "";
let isNumberOneSet = false;

const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const btnSeven = document.querySelector('#seven');
const btnEight = document.querySelector('#eight');
const btnNine = document.querySelector('#nine');
const btnZero = document.querySelector('#zero');
const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');
const btnMultiply = document.querySelector('#multiply');;
const btnDivide = document.querySelector('#divide');
const btnEquals = document.querySelector('#equals');
const resultDiv = document.querySelector('#result');
const previewDiv = document.querySelector('#preview');


btnOne.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "1";
    } else {
        num1 += "1";
    }

    update()
});
btnTwo.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "2";
    } else {
        num1 += "2";
    }

    update()
});
btnThree.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "3";
    } else {
        num1 += "3";
    }

    update()
});
btnFour.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "4";
    } else {
        num1 += "4";
    }

    update()
});
btnFive.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "5";
    } else {
        num1 += "5";
    }

    update()
});
btnSix.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "6";
    } else {
        num1 += "6";
    }

    update()
});
btnSeven.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "7";
    } else {
        num1 += "7";
    }

    update()
});
btnEight.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "8";
    } else {
        num1 += "8";
    }

    update()
});
btnNine.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "9";
    } else {
        num1 += "9";
    }

    update()
});
btnZero.addEventListener('click', function(e) {
    if (isNumberOneSet){
        num2 += "0";
    } else {
        num1 += "0";
    }

    update()
});

btnEquals.addEventListener('click', function(e) {
    switch(operator){
        case "+":
            result = addition(parseInt(num1), parseInt(num2));
            update();
            break;
        case "-":
            result = substraction(parseInt(num1), parseInt(num2));
            update();
            break;
        case "/":
            result = divide(parseInt(num1), parseInt(num2));
            update();
            break;
        case "x":
            result = multiplication(parseInt(num1), parseInt(num2));
            update();
            break;
    }
    
    
});

btnPlus.addEventListener('click', function(e){
    operator = "+";
    isNumberOneSet = true;
    update()
});

btnMinus.addEventListener('click', function(e){
    operator = "-";
    isNumberOneSet = true;
    update()
});

btnDivide.addEventListener('click', function(e){
    operator = "/";
    isNumberOneSet = true;
    update()
});

btnMultiply.addEventListener('click', function(e){
    operator = "x";
    isNumberOneSet = true;
    update()
});


