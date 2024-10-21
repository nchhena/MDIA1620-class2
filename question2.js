const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 79, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

//PLAN:
//ask users's name
//ask user's score
//use if and else if to check score and deliver the appropriate grade
//example: if (score > 86){console.log("[Student Name] has [grade].")}

//determine a proper function name and parameter variable name
function examScore(paramName, paramScore){

  let fullName = paramName;
  let score = paramScore;

  if (score > 85){
    console.log("Excellent! " + fullName + " has an A.");
  } else if (86 > score && score > 72){
    console.log("Great job! " + fullName + " has a B.");
  } else if (73 > score && score > 60){
    console.log("Good effort! " + fullName + " has a C.");
  } else if (61 > score && score > 50){
    console.log("Needs improvement. " + fullName + " has a D.");
  } else if (50 > score){
    console.log("Fail. " + fullName + " has a F.");
  } else {
    console.log("That is not a valid score.")
  }
}

function StartApp(){
  readline.question('What is your full name? ', _paramName => {
    readline.question('What was your exam score? ', _paramScore => {

      examScore(_paramName, _paramScore)

      //readline.close();
      if(_paramName !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();