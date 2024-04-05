function openPopup() {
    document.getElementById("popup").style.display = "block"; // Show the popup
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
}



function logTextarea() {
  var textareaValue = document.getElementById("myTextarea").value;
  console.log(textareaValue);
}



document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll(".draggable-box");

  boxes.forEach(function(box) {
    box.addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("text/plain", event.target.innerText);
    });
  });
});

