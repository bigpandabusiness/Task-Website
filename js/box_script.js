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
    var draggableBoxes = document.querySelectorAll(".draggable-box");
    var darkBoxes = document.querySelectorAll(".dark-rectangle");

    var activatedBox = 0; // Initialize the activated box counter

    draggableBoxes.forEach(function(box, index) {
        box.addEventListener("click", function() {
            console.log("Box clicked"); // Check if the click event is registered

            // Find the index of the clicked box
            var clickedBoxIndex = index + 1; // Adding 1 to match the box numbering (1-based index)

            // If the clicked box is already activated or it's not the next box in sequence, return
            if (clickedBoxIndex <= activatedBox) {
                console.log("Box already activated or not in sequence");
                return;
            }

            // Clone the clicked box
            var clonedBox = box.cloneNode(true);
            clonedBox.classList.add("cloned-box");

            // Position the cloned box at the next available dark box
            var nextDarkBox = darkBoxes[activatedBox];
            if (nextDarkBox) {
                var nextDarkBoxRect = nextDarkBox.getBoundingClientRect();
                clonedBox.style.position = "absolute";
                clonedBox.style.left = nextDarkBoxRect.left + "px";
                clonedBox.style.top = nextDarkBoxRect.top + "px";

                // Append the cloned box to the body
                document.body.appendChild(clonedBox);

                // Update the activated box counter
                activatedBox++;
                console.log("Cloned box created in the next available dark box");
            } else {
                console.log("Next dark box not found");
            }
        });
    });
});

