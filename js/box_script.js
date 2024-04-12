function openPopup() {
    document.getElementById("popup").style.display = "block"; // Show the popup

  addStat("wisdom")
}

function closePopup() {
    // Hide the popup
document.getElementById("popup").style.display = "none";
}



function logTextarea() {
  var textareaValue = document.getElementById("myTextarea").value;
  console.log(textareaValue);
}



function addStat(addStat) {
  darkBox1 = document.getElementById("dark-rectangle-1");
  darkBox2 = document.getElementById("dark-rectangle-2");
  darkBox3 = document.getElementById("dark-rectangle-3");
  flag1 = 0
  flag2 = 0
  flag3 = 0
  
  var xpStat = document.getElementById(addStat + "XPAdd")

  const node = xpStat;
  const clone = node.cloneNode(true);
  clone.classList.add("clone")

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

  
  if (flag1 == 0) {
    clone.style.position = "absolute";
    clone.style.left = x1-5 + "px";
    clone.style.top = y1-5 + "px";
    document.body.appendChild(clone)
    flag1 = 1
  }
  else if (flag2 == 0) {
      clone.style.position = "absolute";
      clone.style.left = x2-5 + "px";
      clone.style.top = y2-5 + "px";
      document.body.appendChild(clone)
      flag2 = 1
    }
  else if (flag3 == 0) {
    clone.style.position = "absolute";
    clone.style.left = x3-5 + "px";
    clone.style.top = y3-5 + "px";
    document.body.appendChild(clone)
    flag3 = 1
  }
}


