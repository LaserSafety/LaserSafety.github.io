// JavaScript code for toggling menu and rotating button
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById("menu");
  var settingsBtn = document.getElementById("settingsBtn");
  var settingsImg = settingsBtn.querySelector("img");
  
  settingsBtn.addEventListener("click", function() {
    menu.classList.toggle("show"); // Toggle the 'show' class on the menu
    settingsImg.classList.toggle("rotate"); // Toggle the 'rotate' class on the button
  });
});
