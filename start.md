<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
/* Your CSS styles here */
.settings-btn {
  position: absolute;
  right: 20px;
  bottom: 10px;
  cursor: pointer;
  z-index: 1000;
}

.rotate-settings {
  height: 50px; /* Maintain aspect ratio */
  transition: transform 0.3s ease; /* Add transition effect */
}

.rotate-settings.rotate {
  transform: rotate(-45deg); /* Rotate clockwise */
}

.menu {
  display: none;
  position: absolute;
  bottom: 0;
  right: -300px; /* Initially off-screen */
  background-color: #fff;
  transition: left 10s ease;
  border: 1px solid #ccc;
  padding: 20px;
  width: 100%; /* Adjust width as needed */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow */
  z-index: 999; /* Ensure the menu is above other content */
  height: 80%;
}
.menu.show {
  display: block; /* Show the menu when 'show' class is present */
  right: 0; /* Ensure the menu is fully visible */
}
a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: black;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: blue;
  background-color: transparent;
  text-decoration: underline;
}

* {
  box-sizing: border-box;
}
input[type=text] {
  width: 20%;
}
input[type=number] {
  width: 50px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

/* Style the navigation menu */
nav {
  background: #ccc;
  padding: 20px;
  height: auto;
}

article {
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

/* Style the header */
header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
  position: relative;
}

/* Trapezoid */
.header-trapezoid {
  width: 20%; /* Adjust width as needed */
  /*background-color: #4cbaef; */
  position: absolute; 
  right: 0px;
  top: 0px;
  border-top: 100px solid #4cbaef;
  border-left: 50px solid transparent;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */
@media (max-width: 600px) {
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  article {
    height: 33%;
  }
  nav {
    width: 100%; /* Cover the whole screen on small screens */
  } 
  footer {
    background-color: #777;
    padding: 10px;
    text-align: center;
    color: white;
    width: 100%;
    position: relative;
    align-items: center;
  }
}

@media (min-width: 601px) {
  section {
    display: flex;
    flex-direction: row;
  }
  article {
    width: 33%;
  }
  nav {
    max-width: 300px;
    height: auto;
  }
  footer {
    background-color: #777;
    padding: 10px;
    text-align: center;
    color: white;
    width: 100%;
    position: relative;
    align-items: center;
    
  }
}

</style>
</head>
<body>

<header>
  Werteeingabe:
  <div class="header-trapezoid"></div>
</header>

<section>
  <nav>
    <ul>
      <li><a href="#">Expositionsdauer</a></li>
      <li><a href="#">Wellenlaenge</a></li>
      <li><a href="#">&#945;</a></li>
    </ul>
  </nav>
  
  <form id="myForm">
    <section id="Expositionsdauer">
      <article>
        <h1>Expositionsdauer (x&sdot;10<sup>-y</sup>)</h1>
        <p>Enter expositionsdauer in the format xE-y:
          <br><b>t</b> = <input type="text" id="expositionsdauer_x"> &sdot;10<sup><bold>-</bold></sup><input type="number" id="expositionsdauer_y">in <b>s</b></p>
      </article>
      <article id="Wellenlaenge">
        <h1>Wellenlaenge</h1>
        <p>Eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
          <br><b>&lambda;</b> = <input type="text" id="wellenlaenge"> in <b>nm</b></p>
      </article>
      <article id="Alpha">
        <h1>&#945;</h1>
        <p>placeholdertext
          <br><b>&#945;</b> = <input type="text" id="alpha"> in <b>mrad</b></p>
      </article>
    </section>
  </form>
</section>

<!-- Link to the JavaScript file for calculations -->
<script src="calculator.js"></script>
<!-- Link to the JavaScript file for menu transitions -->
<script>
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
</script>
<footer>
  <p><input type="submit" value="Ausrechnen" onclick="calculate()"><input type="reset" value="Zur&uuml;cksetzen"></p>
  <p id="result"></p>
   <div class="settings-btn" id="settingsBtn">
    <!-- Use the image directly as the button -->
   <img src="IMG_0217.png" alt="Settings" class="rotate-settings">
  </div>
  <div class="menu" id="menu">
    <!-- Add your menu content here -->
    <!-- For example: -->
    <p>test test test test test test test test test test test test test test test test test test test test test test test</p>
  </div>
</footer>
</body>
</html>
