var first_name = prompt("Type your name");
var second_name = prompt("Type your crash name")

function randomn_number(max) {
  
  return  Math.floor(Math.random() * max); 
}

alert("Your match with " + second_name + "is " + randomn_number(10))
