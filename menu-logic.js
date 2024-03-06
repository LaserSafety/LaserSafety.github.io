// JavaScript code for toggling menu and rotating button
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById("menu");
  var settingsBtn = document.getElementById("settingsBtn");
  var settingsImg = settingsBtn.querySelector("img");

  settingsBtn.addEventListener("click", function() {
    if (menu.style.right === "0px") {
      menu.style.right = "-300px";
      settingsImg.classList.remove("rotate");
    } else {
      menu.style.right = "0px";
      settingsImg.classList.add("rotate");
    }
  });
});
