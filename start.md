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
  z-index: 50;
}

.rotate-settings {
  height: 50px; /* Maintain aspect ratio */
  transition: transform 1.4s ease; /* Add transition effect */
}

.rotate-settings.rotate {
  transform: rotate(-180deg); /* Rotate clockwise */
}

.menu {
  display: flex;
  position: fixed;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 10%);
  width: 0;
  z-index: 49; /* Ensure the menu is above other content */
  top: 102px;
  transition: width 1.4s ease;
  right: 0px;
  height: 100%;
  color: black;
  text-align: center;
}
.menu.show {
  display: flex; /* Show the menu when 'show' class is present */
  flex-direction: column;
  right: 0; /* Ensure the menu is fully visible */
  width: calc(100% - 222px); /* Adjust width as needed */
  height: 100%;
}
.menu.bottom {
  top: auto;
  bottom: 0;
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
  border-top: 102px solid #4cbaef;
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
   .menu {
    top: auto;
    bottom: 0;
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
    width: 300px;
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
          <br><b>t</b> = <input type="text" id="expositionsdauer_x"> &sdot;10<sup><bold>-</bold></sup> <input type="number" id="expositionsdauer_y">in <b>s</b></p>
      </article>
      <article id="Wellenlaenge">
        <h1>Wellenlaenge</h1>
        <p>Eingabe Wellenlaenge <br><b>&lambda;</b> = <input type="text" id="wellenlaenge"> in <b>nm</b></p>
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
<script src="menu-logic.js"></script>
<footer>
  <p><input type="submit" value="Ausrechnen" onclick="calculate()"><input type="reset" value="Zur&uuml;cksetzen"></p>
  <p id="result"></p>
   <div class="settings-btn" id="settingsBtn">
    <!-- Use the image directly as the button -->
   <img src="IMG_0217.png" alt="Settings" class="rotate-settings">
  </div>
  <div class="menu" id="menu">
    <!-- Add your menu content here -->
    <p><h1>Settings</h1></p>
    <p><h2>Theme</h2>
     <br>Light
     <br>Dark
    </p>
  </div>
</footer>
</body>
</html>
