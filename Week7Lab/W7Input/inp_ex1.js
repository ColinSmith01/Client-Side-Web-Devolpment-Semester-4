/*WEB-TEMPLATE-JS-ASSIGNMENT-FILE-NONE*/

function add() {
    // get numbers
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    // get result
    let r = a + b;

    // write result into the answer element
    document.getElementById("answer").innerHTML = r;
}

function subtract() {
    // get numbers
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    // get result
    let r = a - b;

    // write result into the answer element
    document.getElementById("answer").innerHTML = r;
}

function multiply() {
    // get numbers
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    // get result
    let r = a * b;

    // write result into the answer element
    document.getElementById("answer").innerHTML = r;
}

function divide() {
    // get numbers
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    // get result
    let r = a / b;

    // write result into the answer element
    document.getElementById("answer").innerHTML = r;
}


