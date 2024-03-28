window.onload = function() {
  checkLevel
  checkCurrentXP()
  checkMaxXP()
  showLevel()
}

var level = localStorage.getItem("level") 
var currentXP = localStorage.getItem("currentXP") 
var maxXP = localStorage.getItem("maxXP") 
var maxXP = level * 5

var interval = 400

function checkLevel() {
  if (level == null) {
    level = 1;
    localStorage.setItem("level", level)
  }
  else {
    localStorage.setItem("level", level)
  }
}

function checkCurrentXP() {
  if (currentXP == null) {
    currentXP = 0;
    localStorage.setItem("currentXP", currentXP)
  }
}

function checkMaxXP() {
  if (maxXP == null) {
    maxXP = 5;
    localStorage.setItem("maxXP", maxXP)
  }
}

function showLevel() {
  if (level != null && currentXP != null && maxXP != null) {
    level = parseInt(level);
    currentXP = parseInt(currentXP)
    maxXP = parseInt(maxXP);
    // Optionally, you can add text to the level bar here
    var levelBarText = document.getElementById("levelBarText")
    levelBarText.innerHTML =  "Lvl: " + level + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + currentXP + "/" + maxXP 
  }
}

var timer = window.setInterval(function(){
  var currentXP = localStorage.getItem("currentXP");
  var maxXP = localStorage.getItem("maxXP");

  currentXP = parseInt(currentXP);
  maxXP = parseInt(maxXP);



  if (currentXP >= maxXP) {
    var level = localStorage.getItem("level");
    level = parseInt(level) + 1;
    currentXP = currentXP - maxXP;
    maxXP = level * 5;

    localStorage.setItem("level", level);
    localStorage.setItem("maxXP", maxXP);
    localStorage.setItem("currentXP", currentXP);
  }
}, interval);






