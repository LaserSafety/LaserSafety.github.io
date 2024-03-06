function toggleMenu() {
  var menu = document.getElementById("menu");
  var settingsImg = document.querySelector(".rotate-settings");

  // Toggle menu visibility
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    settingsImg.classList.remove("rotate");
  } else {
    menu.classList.add("show");
    settingsImg.classList.add("rotate");
  }
}
