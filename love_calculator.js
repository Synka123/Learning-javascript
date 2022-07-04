var first_name = prompt("Type your name");
var second_name = prompt("Type your crash name")
function randomn_number(max) { 
  return  Math.floor(Math.random() * max); 
}
if (randomn_number(101) >= 50) {
  alert("Your match with " + second_name + " is " + randomn_number(101) + "%. Your lovescore is high.")  
}
else {
  alert("Your match with " + second_name + " is " + randomn_number(101) + "%. Your love score is low")
}
