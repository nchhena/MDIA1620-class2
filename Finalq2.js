const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

let badge = {
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocalypse:0,

};

//rename this to ShowStatus
function showStatus(){
  for(let key in badge){
    console.log(key, badge[key]);
  }
    StartApp();
}

//rename this to AddPoints
function addPoints(){
  readline.question("Which mode do you wish to add 1 point to? ", _command=>{
    let checkMode = false;

    for(let key in badge){
      if(key === "new"){
        checkMode = true;
      }
    }
    for(let key in badge){
      if(key === "easy"){
        checkMode = true;
      }
    }
    for(let key in badge){
      if(key === "medium"){
        checkMode = true;
      }
    }
    for(let key in badge){
      if(key === "hardest"){
        checkMode = true;
      }
    }
    for(let key in badge){
      if(key === "apocalypse"){
        checkMode = true;
      }
    }
    if(checkMode === true){
      badge[_command]++;
      showStatus()
    }
  })
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } 
    else if (_command === "status"){
        showStatus();
    }
    else if (_command === "add"){
      addPoints();
  }
    else{
      StartApp();
    }
  })
}

StartApp();