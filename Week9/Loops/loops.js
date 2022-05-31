function printEven(max) {
    for (let i=1; i<max; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }


function appendSpace()
  var input = document.getElementById("word");

  input.onkeydown = function () {
      if (input.value.length > 0) {
  
          if (input.value.length % 1 == 0) {
              input.value += " ";
              document.getElementById("spaced").innerHTML = input;
              console.log(x)
          }
      }
  }