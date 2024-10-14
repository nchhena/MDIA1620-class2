const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//determine a proper parameter variable name
function CheckDrinkingAge(ageInput){
  if (ageInput < 13) {
    console.log("You are not old enough to drink. Please leave.");
  }
  else if(19 > ageInput > 12) {
    console.log("You are not yet old enough to drink. Please leave and come back when you are 19.");
  }
  else if(50 > ageInput > 18) {
    console.log("Drink away! (Within reason.)");
  }
  else if(70 > ageInput > 49) {
    console.log("Drink, but be mindful of the risk to your health.");
  }
  else if(ageInput > 70) {
    console.log("Drink, but be mindful of the risk to your life and health.");
  }
}

//determine a proper question to ask and the proper variable name for user input
readline.question("How old are you?",ageInput => {

 CheckDrinkingAge()
  
  readline.close();
});

//if(ageInput < [number]) {console.log("response")}
//age < 13: Please leave
//19 > age > 12: please leave and come back when you are 19
//50 > age > 18: drink away! (within reason)
//70 > age > 49: drink, but be mindful of risk to health
//age > 70: drink but be mindful of risk to health and life