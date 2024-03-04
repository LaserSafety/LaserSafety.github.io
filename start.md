<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
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

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}

/* Container for flexboxes */
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

/* Style the navigation menu */
nav {
  width: 30%;
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  padding: 20px;
  background-color: #f1f1f1;
}

/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */
@media (max-width: 600px) {
  section {
    display: flex;
    flex-direction: column;
  }

  nav, article {
    width: 100%;
  }
}
</style>
</head>
<body>

<h2>Startseite</h2>
<p>bla bla bla text ausfuellen</p>
<p>neue zeile, wenn noetig</p>

<header>
  <h2>Werteneingabe:</h2>
</header>

<section>
  <nav>
    <ul>
      <li><a href="#">Expositionsdauer</a></li>
      <li><a href="#">Wellenlaenge</a></li>
    </ul>
  </nav>
  <form id="myForm">
    <article>
  <h1>Expositionsdauer (x*10<sup>-y</sup>)</h1>
  <p>Enter expositionsdauer in the format xE-y:
  <br><input type="text" id="expositionsdauer_x">*10<sup><input type="text" id="expositionsdauer_y"></sup></p>
    </article>
    <article>
      <h1>Wellenlaenge</h1>
      <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
      <br><input type="text" id="wellenlaenge"></p>
    </article>
      <article>
      <h1>&#945;</h1>
      <p>eingabe &#945;
      <br><input type="text" id="alpha"></p>
      <p>eingabe &#945;<sub>max</sub>
        <br><input type="text" id="alphamax"></p>
      <p>eingabe &#945;<sub>min</sub>
        <br><input type="text" id="alphamin"></p>
    </article>
  </form>
</section>

<footer>
  <p><input type="submit" value="Submit" onclick="calculate()"><input type="reset" value="Reset"></p>
  <p id="result"></p>
</footer>

<!-- Link to the JavaScript file for calculations -->
<script src="calculator.js"></script>

</body>
