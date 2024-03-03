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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

/* Style the navigation menu */
nav {
  background: #ccc;
  padding: 25px;
  width: 200px; /* Adjusted width */
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Style the content */
article {
  background-color: #f1f1f1;
  padding: 10px;
}

/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */
@media (max-width: 600px) {
  section {
    grid-template-columns: 1fr;
  }

  nav {
    width: 100%;
  }

  article {
    width: 100%;
  }
}

/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
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
      <li><a href="#">C<sub>e</sub></a></li>
    </ul>
  </nav>
  <form id="myForm">
    <article>
      <h1>Expositionsdauer</h1>
      <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
      <br><input type="text" id="expositionsdauer"></p>
    </article>
    <article>
      <h1>Wellenlaenge</h1>
      <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
      <br><input type="text" id="wellenlaenge"></p>
    </article>
    <article>
      <h1>C<sub>e</sub></h1>
      <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
      <br><input type="text" id="C_e"></p>
    </article>
  </form>
</section>

<footer>
  <p><input type="submit" value="Submit" onclick="calculate()"><input type="reset" value="Reset"></p>
  <p id="result"></p>
</footer>

<!-- Link to the JavaScript file for calculations -->
<script src="calculator.js"></script>
