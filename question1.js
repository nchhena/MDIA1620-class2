const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

//PLAN:
//if{input2 !== input1}: deny access, wrong Password
//if{input2 === input1}: deny access, wrong Password
//else if{input2 === "forgot"}: give hint
//else if{input2 === "reset"}: reset account prompt

//determine a proper function name and parameter variable name
function passwordCheck(passCheck1, passCheck2){

  let input1 = passCheck1;
  let input2 = passCheck2;

  if(input2 === input1){
    console.log("Access Granted!");
  } else if(input2 === "forgot"){
    console.log("Here's a hint:");
  } else if(input2 === "reset"){
    console.log("Let's reset your account.");
  } else {
    console.log("Access Denied!")
  }
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('Please set a password. ', _passCheck1 => {
    readline.question('Please enter your password. ', _passCheck2 => {


      passwordCheck(_passCheck1, _passCheck2);

      // readline.close();
      if(_passCheck2 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();
