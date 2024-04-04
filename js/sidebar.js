// Sidebar Function
function sideBar() {
  const sidebarElement = document.getElementById("sidebar");
  if (sidebarElement.innerHTML.trim() === "") {
    // Sidebar content is empty, add menu button and other content
    sidebarElement.innerHTML = `
    <div class="sidenav" id="sidenav">
      <div class="sidebarTop">
        <span class="material-symbols-outlined" style="font-size: 30px;" onclick="sideBar()">
        menu
        </span>
      </div>
      <a href='index.html'>Home</a>
      <a href='stats.html'>Stats</a>
      <a href='daily.html'>Daily</a>
      <a href='#'>Weekly</a>
      <a href='login.html'>Login</a>
      <a href='#'>Themes</a>
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