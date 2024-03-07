document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById("menu");
  var settingsBtn = document.getElementById("settingsBtn");
  var settingsImg = settingsBtn.querySelector("img");
  
  // Function to hide the menu
  function hideMenu() {
    menu.classList.remove("show"); // Remove the 'show' class from the menu
    menu.classList.add("hide"); // Add the 'hide' class to the menu
    settingsImg.classList.remove("rotate"); // Remove the 'rotate' class from the button
  }
  
  settingsBtn.addEventListener("click", function() {
    if (menu.classList.contains("show")) {
      hideMenu(); // If menu is shown, hide it
    } else {
      menu.classList.toggle("show"); // Toggle the 'show' class on the menu
      settingsImg.classList.toggle("rotate"); // Toggle the 'rotate' class on the button
    }
  });
});
