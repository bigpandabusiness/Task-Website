window.onload = checkLevel

function checkLevel() {
  var level = localStorage.getItem("level");
  if (level == null) {
    level = 1;
    localStorage.setItem("level", level);
    document.getElementById("levelOutput").innerHTML = level;
  }
  else {
    document.getElementById("levelOutput").innerHTML = level;
  }
}





// function levelUp()