<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
/* Your CSS styles here */
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

<section>
  <nav>
    <!-- Your navigation menu here -->
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

</body>
</html>
