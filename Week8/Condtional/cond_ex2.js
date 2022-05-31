


function performOperation(){
    let a = + document.getElementById("num1").value;
    let b = + document.getElementById("num2").value;
   
// take the operator input

   
    // using if...else if... else
    if (onclick=='+') {
        result = a + b;
        document.getElementById("answer").innerHTML = result;
    }
    else if (onclick=='-') {
        result = a - b;
        document.getElementById("answer").innerHTML = result;
    }
    else if (onclick=='*') {
        result = a * b;
        document.getElementById("answer").innerHTML = result;
    }
    else if (onclick=='/') {
        result = a / b;
        document.getElementById("answer").innerHTML = result;
    
    }
    }