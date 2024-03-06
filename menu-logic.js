function toggleMenu() {
  var menu = document.getElementById("menu").style.display = "block";
  var settingsImg = document.querySelector(".rotate-settings");

  // Toggle menu visibility by toggling the 'show' class
  menu.classList.toggle("show");
  
  // Toggle rotation of the settings button
  settingsImg.classList.toggle("rotate");
