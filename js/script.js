function addBox() {
  div = 
  document.createElement('div')
  div.classList.add('box')
  // Create a text input element
  var input = document.createElement("input")

  // Set input type to text
  input.type = "text"

  // Set some initial value (optional)
  input.value = "Edit me!"

  // Set styles (optional)
  input.style.width = "140px"
  input.style.height = "10px"
  input.style.border = "none"

  //To get rid of "Edit me" on click
  input.addEventListener("focus", function() {
    if (input.value === "Edit me!") {
      input.value = ""
    }
  })
  
  div.appendChild(input);
  const element = 
  document.getElementById("div1");
  element.appendChild(div);
}

