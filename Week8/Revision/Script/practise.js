
///2///
alert("Hello from practise file");
console.log("Hello from practise file");

///4//
function doubleTheNumber() {
    let r = Math.floor(Math.random() * 100) + 1;
    console.log(r);
    w = r *2
    console.log(w);
}
doubleTheNumber();


///5///
function parlog() {
  var x = document.getElementById("my-text").value;
  console.log(x)
}

///6///
function string_dest() {
	document.getElementById("text-destination-1").innerHTML = "Ho ho ho here we go";}



////10////
function assignclass() {
  document.getElementsByTagName("p")[5].setAttribute("class", "abc"); 
}




///11a///
function cpbutton() {
  var x = document.getElementById("text-input").value;
  document.getElementById("text-destination-2").innerHTML = x;
  ////8///
  console.log(x)
}


///11b///
function double() {
     let a = +document.getElementById("num1").value;
     let r = a * 2;
     document.getElementById("double-number").innerHTML = r;
 }
 


////12////
function changeColor() {
  var box = document.getElementById('my-box').style.backgroundColor;  
  var color = '';
  
  if (box !== 'lightsalmon') {
      color = 'lightsalmon';
      document.getElementById('my-box').style.backgroundColor = color;       
  
      }
  else if (box === 'lightsalmon') {
      color = 'lightblue';
      document.getElementById('my-box').style.backgroundColor = color; 
      }
  }
