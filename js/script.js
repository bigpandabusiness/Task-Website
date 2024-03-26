

//Sign Up Function
function signUp() {
  // Get the values of the input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Check if the passwords match
  if (password === confirmPassword) {
    // Create a new user object
    var user = {
      username: username,
      password: password
    };

    // Save the user object to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect the user to the home page
    window.location.href = "index.html";
  } else {
    // Display an error message
    alert("Passwords do not match. Please try again.");
  }
}

//Login Function
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

// Sidebar Function
function sideBar() {
  const sidebarElement = document.getElementById("sidebar");
  if (sidebarElement.innerHTML.trim() === "") {
    // Sidebar content is empty, add menu button and other content
    sidebarElement.innerHTML = `
    <div class="sidenav" id="sidenav">
      <span class="material-symbols-outlined" style="font-size: 30px;" onclick="sideBar()">
        menu
      </span>
      <a href='#'>About</a>
      <a href='#'>Services</a>
      <a href='#'>Clients</a>
      <a href='#'>Contact</a>
      <a href='#'>About</a>
      <a href='#'>Services</a>
      <a href='#'>Clients</a>
      <a href='#'>Contact</a>
      <a href='#'>About</a>
      <a href='#'>Services</a>
      </div>`;
  } else {
    // Sidebar content exists, remove it
    sidebarElement.innerHTML = "";
  }
}


// var level = 1
// var maximumXP = 5
// var currentXP = 1
// var xpBar = document.getElementById("xpBar")

// function levelUp()