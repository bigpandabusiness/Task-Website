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

function deleteBox(button) {
  console.log("deleteBox")
  var boxToDelete = button.closest('.questBox'); // Find the closest parent element with class 'questBox'
  if (boxToDelete) {
      boxToDelete.remove();
  }
  console.log("Box has been deleted")
}

function completeQuest(button) {
  console.log("completeQuest")
  var boxToComplete = button.closest('.questBox'); // Find the closest parent element with class 'questBox'
  if (boxToComplete) {
      boxToComplete.classList.add('completed');
  }
  console.log("Quest has been completed")
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
  localStorage.setItem("saveText", textareaValue);
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
    document.body.appendChild(clone)
    flag1 = 1
    saveXP(addStat)
  }
  else if (flag2 != 1) {
    clone.style.position = "absolute";
    clone.style.left = x2-5 + "px";
    clone.style.top = y2-5 + "px";
    document.body.appendChild(clone)
    flag2 = 1
    saveXP(addStat)
    }
  else if (flag3 != 1) {
    clone.style.position = "absolute";
    clone.style.left = x3-5 + "px";
    clone.style.top = y3-5 + "px";
    document.body.appendChild(clone)
    flag3 = 1
    saveXP(addStat)
  }
  return clone
}

function saveXP(saveXP) {
  console.log(saveXP)
  xpSave = (localStorage.getItem(saveXP + "Save"))
  console.log(xpSave)
  if (xpSave == null) {
    parseInt(localStorage.setItem(saveXP + "Save", 0))
    console.log(xpSave)
    xpSave = localStorage.getItem(saveXP + "Save")
    console.log(xpSave)
  }
  else {
    xpSave = localStorage.getItem(saveXP + "Save")
  }
  console.log(xpSave)
  xpSave = parseInt(xpSave) + 1
  localStorage.setItem(saveXP + "Save", xpSave)
  console.log(xpSave)
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
    // var boxId = Date.new()
    var box = document.createElement("div");
    box.classList.add("questBox");
    // box.id = boxId;
    
    

    // Create timer display element
    var display = document.createElement("div");
    display.id = "showTimer"; // Make sure this element has the ID "timerShow"
    display.classList.add("timerDisplay");
    display.innerHTML = "00:00:00";
    var text = localStorage.getItem("saveText");
    textDisplay = document.createElement("div");
    textDisplay.classList.add("textDisplayBox");
    textDisplay.innerHTML = text
    box.appendChild(textDisplay);
    box.appendChild(display); 
    
    // Find the previous box
    var previousBox = document.querySelector('.questBox');

    // If there's a previous box, insert the new box before it
    if (previousBox) {
        previousBox.parentNode.insertBefore(box, previousBox);
    } else {
        // If there's no previous box, append the new box to the parent element
        div1.appendChild(box);
    }

  
    box.innerHTML = box.innerHTML + '<span class="closeBtnBox" onclick="deleteBox()" id="closeButton">×</span>' + '<span class="completeQuestBtn" onclick="deleteBox(this); completeQuest()" id="completeQuestBtn">✓</span>'

    var statKeys = ["physicality", "strength", "speed", "endurance", "jumping", "diligence", "knowledge", "wisdom", "grades", "relationship", "money", "cooking", "dancing", "music", "programming", "stress", "sadness", "calmness", "peace", "media", "interactions" ,"notDatingATwelveYearOld", "charizzma"];

    // Retrieve values from localStorage for each stat key
    statKeys.forEach(function(statKey) {
        var xpValue = localStorage.getItem(statKey + "Save");
        if (xpValue == null) {
          localStorage.setItem(statKey + "Save", 0)
          xpValue = localStorage.setItem(statKey + "Save");
          console.log(xpValue)
        }
        if(xpValue > 0) {
          var xpStat = document.getElementById(statKey + "XPAdd")
          console.log(xpStat)
          const node = xpStat
          const clone = node.cloneNode(true);
          clone.classList.add("clone-box")
          clone.id = addStat + "XPAddClone"
          box.appendChild(clone)
          localStorage.setItem(statKey + "Save", 0);
          xpValue = localStorage.getItem(statKey + "Save")
          
        }
        console.log(statKey + " XP:", xpValue);
    })
    setTimer()
    console.log("Set timer running")
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