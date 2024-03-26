// Sidebar Function
function sideBar() {
  const sidebarElement = document.getElementById("sidebar");
  if (sidebarElement.innerHTML.trim() === "") {
    // Sidebar content is empty, add menu button and other content
    sidebarElement.innerHTML = `
    <div class="sidenav" id="sidenav">
      <div>
        <span class="material-symbols-outlined" style="font-size: 30px;" onclick="sideBar()">
        menu
        </span>
      </div>
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