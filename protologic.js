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

  // Function to show the menu
  function showMenu() {
    menu.classList.remove("hide"); // Remove the 'hide' class from the menu
    menu.classList.add("show"); // Add the 'show' class to the menu
    settingsImg.classList.add("rotate"); // Add the 'rotate' class to the button
  }
  
  settingsBtn.addEventListener("click", function() {
    if (menu.classList.contains("show")) {
      hideMenu(); // If menu is shown, hide it
    } else {
      showMenu(); // Otherwise, show it
    }
  });
});
