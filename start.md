<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Laser Safety</title>
<style>
/* Stylesheet content */
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
      <li><a href="#">&#945;</a></li>
    </ul>
  </nav>
  <form id="myForm">
    <article>
  <h1>Expositionsdauer (x&sdot;10<sup>-y</sup>)</h1>
  <p>Enter expositionsdauer in the format xE-y:
  <br><input type="text" id="expositionsdauer_x">&sdot;10<sup>-<input type="number" id="expositionsdauer_y"></sup></p>
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
<script src="main_calculator.js"></script>

</body>
