---
permalink: /start&theme=dark.html
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
/* Your CSS styles here */
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
  background: #ABB2B9;
  padding: 20px;
  height: auto;
}

article {
  background-color: #283747;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

/* Style the header */
header {
  background-color: #2E4053;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: #FDEBD0;
  position: relative;
}

/* Trapezoid */
.header-trapezoid {
  width: 20%; /* Adjust width as needed */
  height: 300px;
  /*background-color: #4cbaef; */
  position: absolute; 
  right: 0px;
  top: 0px;
  border-top: 25px solid #0041D9;
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
    margin-top: auto; /* Push the footer to the bottom */
    width: 100%;
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
    margin-top: auto; /* Push the footer to the bottom */
    width: 100%;
  }
}
</style>
</head>
<body>

<header>
  Werteneingabe:
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
        <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
          <br><b>&lambda;</b> = <input type="text" id="wellenlaenge"> in <b>nm</b></p>
      </article>
      <article id="Alpha">
        <h1>&#945;</h1>
        <p>eingabe <b>&#945;</b> in <b>mrad</b>    
          <br><input type="text" id="alpha"></p>
        <p>eingabe <b>&#945;</b><sub>max</sub> in <b>mrad</b>
          <br><input type="text" id="alphamax"></p>
        <p>eingabe <b>&#945;</b><sub>min</sub> in <b>mrad</b>
          <br><input type="text" id="alphamin"></p>
      </article>
    </section>
  </form>
</section>

<footer>
  <p><input type="submit" value="Ausrechnen" onclick="calculate()"><input type="reset" value="Zur&uuml;cksetzen"></p>
  <p id="result"></p>
</footer>

<!-- Link to the JavaScript file for calculations -->
<script src="calculator.js"></script>

</body>
