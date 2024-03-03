<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
/* Your CSS styles here */
  header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}
article {
  float: left;
  padding: 20px;
  width: 80%;
  background-color: #f1f1f1;
}
</style>
</head>
<body>

<!-- Your HTML content here -->

<h2>Startseite</h2>
<p>bla bla bla text ausfuellen</p>
<p>neue zeile, wenn noetig</p>

<header>
  <h2>Werteneingabe:</h2>
</header>
<style>
/* Style the navigation menu */
nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #ccc;
  padding: 10px; /* Adjusted padding */
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

/* Style the content */
article {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
}
section::after {
  content: "";
  display: table;
  clear: both;
}
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}
nav {
  float: left;
  width: 20%;
  background: #ccc;
  padding: 20px;
}
</style>
<section>
    <!-- Your navigation menu here -->
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
