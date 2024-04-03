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
var charisma = parseInt(localStorage.getItem("charisma"));
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
var charisma = parseInt(localStorage.getItem("charisma"));




//Funciton to update the stats

window.onload = function() {
  checkStat('physicality');
  checkStat('strength');
  checkStat('speed');
  checkStat('endurance');
  checkStat('jumping');
  checkStat('intelligence');
  checkStat('diligence');
  checkStat('charisma');
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
  checkStat('mentality');
  checkStat('stress');
  checkStat('sadness');
  checkStat('calmness');
  checkStat('peace');
  checkStat('social');
  checkStat('media');
  checkStat('interactions');
  checkStat('notDatingATwelveYearOld');
  checkStat('charisma');

  //update stats
  updateStat('physicality');
  updateStat('strength');
  updateStat('speed');
  updateStat('endurance');
  updateStat('jumping');
  updateStat('intelligence');
  updateStat('diligence');
  updateStat('charisma');
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
  updateStat('charisma');

  //show stats
  showStat('physicality');
  showStat('strength');
  showStat('speed');
  showStat('endurance');
  showStat('jumping');
  showStat('intelligence');
  showStat('diligence');
  showStat('charisma');
  showStat('knowledge');
  showStat('wisdom');
  showStat('prospects');
  showStat('grades');
  showStat('relationship');
  showStat('money');
  showStat('coolness');
  showStat('cooking');
  showStat('dancing');
  showStat('music');
  showStat('programming');
  showStat('hobbies');
  showStat('mentality');
  showStat('stress');
  showStat('sadness');
  showStat('calmness');
  showStat('peace');
  showStat('social');
  showStat('media');
  showStat('interactions');
  showStat('notDatingATwelveYearOld');
  showStat('charisma');
}


//Check stats
function checkStat(statName) {
  var mystat = localStorage.getItem(statName);
  var mystatXP = localStorage.getItem(statName + "XP");
  var mystatMaxXP = localStorage.getItem(statName + "MaxXP");

  if (mystat == null || mystatXP == null || mystatMaxXP == null) {
    mystat = 1;
    mystatXP = 0;
    mystatMaxXP = mystat * 5;
    localStorage.setItem(statName, mystat);
    localStorage.setItem(statName + "XP", mystatXP);
    localStorage.setItem(statName + "MaxXP", mystatMaxXP);
    console.log(mystat, mystatXP, mystatMaxXP)
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
  var mystatMaxXP = parseInt(localStorage.getItem(statName + "MaxXP"));

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
  var mystatMaxXP = localStorage.getItem(statName + "MaxXP");
  if (mystat != null && mystatXP != null && mystatMaxXP != null) {
    mystat = parseInt(mystat);
    mystatXP = parseInt(mystatXP)
    mystatMaxXP = parseInt(mystatMaxXP)

    var statBarText = document.getElementById(statName + "BarText")
    statBarText.innerHTML = "Lvl: " + mystat + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + mystatXP + "/" + mystatMaxXP
  }
}