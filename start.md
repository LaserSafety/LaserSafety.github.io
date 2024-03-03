---
permalink: /start.html
---
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
  font-weight: bold;
}

a:active {
  color: blue;
  background-color: transparent;
  text-decoration: underline;
}
</style>
<head>
<title>Laser Safety</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
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
  display: -webkit-flex;
  display: flex;
}

/* Style the navigation menu */
nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #ccc;
  padding: 20px;
  width:15%;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
  width: 15%;
}

/* Style the content */
article {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
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
    -webkit-flex-direction: column;
    flex-direction: column;
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
      <li><a href="#expositionsdauer">Expositionsdauer</a></li>
      <li><a href="#wellenlaenge">Wellenlaenge</a></li>
      <li><a href="#C_e">C<sub>e</sub></a></li>
    </ul>
  </nav>
  
  <article>
    <h1 id="expositionsdauer">Expositionsdauer</h1>
    <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
    <br><input type="text" id=expositionsdauer></p>
  </article>
  <article>
    <h1 id="wellenlaenge">Wellenlaenge</h1>
    <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
    <br><input type="text" id=wellenlaenge></p>
  </article>
  <article>
    <h1 id="C_e">C<sub>e</sub></h1>
    <p>eingabe expositionsdauer (dieser text ist ueberfluessig, spaeter wird er entfernt!
    <br><input type="text" id=C_e></p>
  </article>
</section>

<footer>
  <p>Footer</p>
</footer>

</body>
