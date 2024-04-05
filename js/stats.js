// Health
var health = parseInt(localStorage.getItem("health"));
var physicality = parseInt(localStorage.getItem("physicality"));
var strength = parseInt(localStorage.getItem("strength"));
var speed = parseInt(localStorage.getItem("speed"));
var endurance = parseInt(localStorage.getItem("endurance"));
var jumping = parseInt(localStorage.getItem("jumping"));

// Intelligence
var intelligence = parseInt(localStorage.getItem("intelligence"));
var diligence = parseInt(localStorage.getItem("diligence"));
var knowledge = parseInt(localStorage.getItem("knowledge"));
var wisdom = parseInt(localStorage.getItem("wisdom"));

// Prospects
var prospects = parseInt(localStorage.getItem("prospects"));
var grades = parseInt(localStorage.getItem("grades"));
var relationship = parseInt(localStorage.getItem("relationship"));
var money = parseInt(localStorage.getItem("money"));

// Coolness
var coolness = parseInt(localStorage.getItem("coolness"));
var cooking = parseInt(localStorage.getItem("cooking"));
var dancing = parseInt(localStorage.getItem("dancing"));
var music = parseInt(localStorage.getItem("music"));
var programming = parseInt(localStorage.getItem("programming"));

// Mentality
var mentality = parseInt(localStorage.getItem("mentality"));
var stress = parseInt(localStorage.getItem("stress"));
var sadness = parseInt(localStorage.getItem("sadness"));
var calmness = parseInt(localStorage.getItem("calmness"));
var peace = parseInt(localStorage.getItem("peace"));

// Social
var social = parseInt(localStorage.getItem("social"));
var media = parseInt(localStorage.getItem("media"));
var interactions = parseInt(localStorage.getItem("interactions"));
var notDatingATwelveYearOld = parseInt(localStorage.getItem("notDatingATwelveYearOld"));
var charizzma = parseInt(localStorage.getItem("charizzma"));




//Funciton to update the stats

window.onload = function() {
  checkStat('physicality');
  checkStat('strength');
  checkStat('speed');
  checkStat('endurance');
  checkStat('jumping');
  checkStat('intelligence');
  checkStat('diligence');
  checkStat('knowledge');
  checkStat('wisdom');
  checkStat('prospects');
  checkStat('grades');
  checkStat('relationship');
  checkStat('money');
  checkStat('coolness');
  checkStat('cooking');
  checkStat('dancing');
  checkStat('music');
  checkStat('programming');
  checkStat('hobbies');
  checkStat('mentality');
  checkStat('stress');
  checkStat('sadness');
  checkStat('calmness');
  checkStat('peace');
  checkStat('social');
  checkStat('media');
  checkStat('interactions');
  checkStat('notDatingATwelveYearOld');
  checkStat('charizzma');

  //update stats
  
  //health
  setInterval(function() {
    updateStat('physicality');
    updateStat('strength');
    updateStat('speed');
    updateStat('endurance');
    updateStat('jumping');
    updateStat('intelligence');
    updateStat('diligence');
    updateStat('knowledge');
    updateStat('wisdom');
    updateStat('prospects');
    updateStat('grades');
    updateStat('relationship');
    updateStat('money');
    updateStat('coolness');
    updateStat('cooking');
    updateStat('dancing');
    updateStat('music');
    updateStat('programming');
    updateStat('hobbies');
    updateStat('mentality');
    updateStat('stress');
    updateStat('sadness');
    updateStat('calmness');
    updateStat('peace');
    updateStat('social');
    updateStat('media');
    updateStat('interactions');
    updateStat('notDatingATwelveYearOld');
    updateStat('charizzma');
  }, 4000);

  //show stats
  showStat('physicality');
  showStat('strength');
  showStat('speed');
  showStat('endurance');
  showStat('jumping');
  showStat('diligence');
  showStat('knowledge');
  showStat('wisdom');
  showStat('grades');
  showStat('relationship');
  showStat('money');
  showStat('cooking');
  showStat('dancing');
  showStat('music');
  showStat('programming');
  showStat('hobbies');
  showStat('stress');
  showStat('sadness');
  showStat('calmness');
  showStat('peace');
  showStat('media');
  showStat('interactions');
  showStat('notDatingATwelveYearOld');
  showStat('charizzma');

  //Show Level
  showLevel('programming')
  showLevel('dancing')
  showLevel('music')
  showLevel('hobbies')
  showLevel('cooking')
  showLevel('stress');
  showLevel('sadness');
  showLevel('calmness');
  showLevel('peace');
  showLevel('media');
  showLevel('interactions');
  showLevel('notDatingATwelveYearOld');
  showLevel('charizzma');
  showLevel('physicality');
  showLevel('strength');
  showLevel('speed');
  showLevel('endurance');
  showLevel('jumping');
  showLevel('diligence');
  showLevel('knowledge');
  showLevel('wisdom');
  showLevel('grades');
  showLevel('relationship');
  showLevel('money');
}


//Check stats xp
function checkStat(statName) {
  var mystat = localStorage.getItem(statName);
  var mystatXP = localStorage.getItem(statName + "XP");
  var mystatMaxXP = mystat * 5

  if (mystat == null || mystatXP == null || mystatMaxXP == null) {
    mystat = 1;
    mystatXP = 0;
    mystatMaxXP = mystat * 5;
    localStorage.setItem(statName, mystat);
    localStorage.setItem(statName + "XP", mystatXP);
    localStorage.setItem(statName + "MaxXP", mystatMaxXP);
  }
  else {
    localStorage.setItem(statName, mystat);
    localStorage.setItem(statName + "XP", mystatXP);
    localStorage.setItem(statName + "MaxXP", mystatMaxXP);
  }
}


function updateStat(statName) {
  var mystat = parseInt(localStorage.getItem(statName));
  var mystatXP = parseInt(localStorage.getItem(statName + "XP"));
  var mystatMaxXP = mystat * 5
  
  if (mystatXP >= mystatMaxXP) {
    mystat = mystat + 1
    mystatXP = mystatXP - mystatMaxXP
    mystatMaxXP = mystat * 5
    localStorage.setItem(statName, mystat);
    localStorage.setItem(statName + "XP", mystatXP);
    localStorage.setItem(statName + "MaxXP", mystatMaxXP);
  }
}

function showStat(statName) {
  var mystat = localStorage.getItem(statName);
  var mystatXP = localStorage.getItem(statName + "XP");
  var mystatMaxXP = mystat * 5
  if (mystat != null && mystatXP != null && mystatMaxXP != null) {
    mystat = parseInt(mystat);
    mystatXP = parseInt(mystatXP)
    mystatMaxXP = parseInt(mystatMaxXP)

    var statBarText = document.getElementById(statName + "BarText")
    statBarText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + mystatXP + "/" + mystatMaxXP
  }
}

//Show stat level
function showLevel(statName) {
  console.log(0)
  var mystat = localStorage.getItem(statName);
  var mystatXP = localStorage.getItem(statName + "XP");
  var mystatMaxXP = mystat * 5
  console.log(1)
  
  if (mystat != null && mystatXP != null && mystatMaxXP != null) {
    mystat = parseInt(mystat);
    mystatXP = parseInt(mystatXP)
    mystatMaxXP = parseInt(mystatMaxXP)
    console.log(2)

    var statLvl = document.getElementById(statName + "LevelNumber")
    statLvl.innerHTML = mystat
    console.log(3)
  }
}