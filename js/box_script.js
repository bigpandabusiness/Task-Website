function openPopup() {
    document.getElementById("popup").style.display = "block"; // Show the popup
}

function closePopup() {
  removeElementsByClass("clone");
    // Hide the popup
document.getElementById("popup").style.display = "none";
  flag1 = 0
  flag2 = 0 
  flag3 = 0
  return flag1, flag2, flag3
}

function closeTimerPopup() {
  removeElementsByClass("clone");
    // Hide the popup
document.getElementById("pickTimePopup").style.display = "none";
  flag1 = 0
  flag2 = 0 
  flag3 = 0
  return flag1, flag2, flag3
}



function logTextarea() {
  var textareaValue = document.getElementById("myTextarea").value;
  console.log(textareaValue);
}


var flag1 = 0
var flag2 = 0
var flag3 = 0

function addStat(addStat) {
  var darkBox1 = document.getElementById("dark-rectangle-1");
  var darkBox2 = document.getElementById("dark-rectangle-2");
  var darkBox3 = document.getElementById("dark-rectangle-3");

  
  var xpStat = document.getElementById(addStat + "XPAdd")

  const node = xpStat;
  const clone = node.cloneNode(true);
  clone.classList.add("clone")
  clone.id = addStat + "XPAddClone"
  

  //Code to move stat boxes to dark boxes
  var rect1 = darkBox1.getBoundingClientRect();
  var x1 = rect1.left;
  var y1 = rect1.top;

  var rect2 = darkBox2.getBoundingClientRect();
  var x2 = rect2.left;
  var y2 = rect2.top;
  
  var rect3 = darkBox3.getBoundingClientRect();
  var x3 = rect3.left;
  var y3 = rect3.top;

  
  if (flag1 != 1) {
    clone.style.position = "absolute";
    clone.style.left = x1-5 + "px";
    clone.style.top = y1-5 + "px";
    console.log(x1, y1)
    document.body.appendChild(clone)
    flag1 = 1
    // addXP(addXP)
  }
  else if (flag2 != 1) {
    clone.style.position = "absolute";
    clone.style.left = x2-5 + "px";
    clone.style.top = y2-5 + "px";
    console.log(x2, y2)
    document.body.appendChild(clone)
    flag2 = 1
    // addXP(addXP)
    }
  else if (flag3 != 1) {
    clone.style.position = "absolute";
    clone.style.left = x3-5 + "px";
    clone.style.top = y3-5 + "px";
    console.log(x3, y3)
    document.body.appendChild(clone)
    flag3 = 1
    // addXP(addXP)
  }
  return clone
}



document.addEventListener("DOMContentLoaded", function() {
    // Health
    var physicality = parseInt(localStorage.getItem("physicality"));
    var strength = parseInt(localStorage.getItem("strength"));
    var speed = parseInt(localStorage.getItem("speed"));
    var endurance = parseInt(localStorage.getItem("endurance"));
    var jumping = parseInt(localStorage.getItem("jumping"));

    // Intelligence
    var diligence = parseInt(localStorage.getItem("diligence"));
    var knowledge = parseInt(localStorage.getItem("knowledge"));
    var wisdom = parseInt(localStorage.getItem("wisdom"));

    // Prospects
    var grades = parseInt(localStorage.getItem("grades"));
    var relationship = parseInt(localStorage.getItem("relationship"));
    var money = parseInt(localStorage.getItem("money"));

    // Coolness
    var cooking = parseInt(localStorage.getItem("cooking"));
    var dancing = parseInt(localStorage.getItem("dancing"));
    var music = parseInt(localStorage.getItem("music"));
    var programming = parseInt(localStorage.getItem("programming"));

    // Mentality
    var stress = parseInt(localStorage.getItem("stress"));
    var sadness = parseInt(localStorage.getItem("sadness"));
    var calmness = parseInt(localStorage.getItem("calmness"));
    var peace = parseInt(localStorage.getItem("peace"));

    // Social
    var media = parseInt(localStorage.getItem("media"));
    var interactions = parseInt(localStorage.getItem("interactions"));
    var notDatingATwelveYearOld = parseInt(localStorage.getItem("notDatingATwelveYearOld"));
    var charizzma = parseInt(localStorage.getItem("charizzma"));

    // Attaching event listeners to elements
    var statElements = ["physicality", "strength", "speed", "endurance", "jumping", "diligence", "knowledge", "wisdom", "grades", "relationship", "money", "cooking", "dancing", "music", "programming", "stress", "sadness", "calmness", "peace", "media", "interactions", "notDatingATwelveYearOld", "charizzma"];

    statElements.forEach(function(stat) {
        var element = document.getElementById(stat + "XPAdd");
        element.addEventListener("click", function() {
            addStat(stat);
        });
    });
});




function removeElementsByClass() {
    var elements = document.getElementsByClassName("clone");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function pickTime() {
  document.getElementById("pickTimePopup").style.display = "block"; // Show the popup
}



// Function to start the timer and create a box with the timer display
function createBox() {
    // Remove any existing boxes
    removeElementsByClass("clone");

    // Create box element
    var box = document.createElement("div");
    box.classList.add("questBox");
    box.style.backgroundColor = "#96237a";

    // Create timer display element
    var display = document.createElement("div");
    display.id = "showTimer"; // Make sure this element has the ID "timerShow"
    display.innerHTML = "00:00:00";
    box.appendChild(display); 
    div1.appendChild(box);

    setTimer()
}

function setTimer() {
    // Get the timerDisplay element by ID here
    var timerDisplay = document.getElementById("showTimer");

    // Execute the timer update function immediately
    updateTimer();

    // Set interval to update the timer display every second
    setInterval(updateTimer, 1000);

    function updateTimer() {
        // Calculate time difference
      var currentDate = new Date();
      var newDate = new Date(document.getElementById("calendarInput").value);
      if (newDate > 0) {
        var timeDifference = newDate.getTime() - currentDate.getTime();

        var seconds = Math.floor(timeDifference / 1000) % 60;
        var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
        var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Update the timer display
        timerDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

        console.log(days, minutes, hours, seconds);
        console.log("Timer updated");
    }
  }
}