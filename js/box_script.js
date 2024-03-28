function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function createBox() {
  var container = document.createElement("div");
  container.classList.add("container");
  var box = document.createElement("div");
  box.classList.add("box");
  box.setAttribute("onclick", "openPopup()");
  box.textContent = "Click Me";
  container.appendChild(box);
  document.body.insertBefore(container, document.querySelector(".button"));
}