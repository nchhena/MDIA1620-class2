const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

let userColours = [];
let theme = {
  red: true,
  green: true,
  blue: true,
  yellow: true,
  orange: true,
};

//rename this to AddUserColor
function addUserColour(){
  readline.question("What colour would you like to add? ", _colour=>{
    if(_colour in theme){
      console.log("This colour is not allowed, sorry!");
    }
    else {
      userColours.push(_colour);
      StartApp();
    }
  })
  displayUserColours();
}

//rename this to DisplayUserColors
function displayUserColours(){
  //add a color to userColors
  console.log(userColours);
  StartApp();
}

//rename this to ToggleThemeColor
function toggleThemeColour(){
  readline.question("What colour do you wish to toggle? ", _command=>{
    if(_command === "red"){
      theme.red = !theme.red;
      console.log("Red has been toggled.");
    }
    else if(_command === "green"){
      theme.green = !theme.green;
      console.log("Green has been toggled.");
    }
    else if(_command === "blue"){
      theme.blue = !theme.blue;
      console.log("Blue has been toggled.");
    }
    else if(_command === "yellow"){
      theme.yellow = !theme.yellow;
      console.log("Yellow has been toggled.");
    }
    else if(_command === "orange"){
      theme.orange = !theme.orange;
      console.log("Orange has been toggled.");
    }
    else{
      console.log("That is not a theme colour.");
    }
    displayUserColours();
    StartApp();
  })
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    }
    else if(_command === "display"){
      displayUserColours();
    }
    else if(_command === "toggle"){
      toggleThemeColour();
    }
    else if(_command === "add"){
      addUserColour();
    }
    else{
      StartApp();
    }
  })
}

StartApp();