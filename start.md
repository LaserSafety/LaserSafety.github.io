
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

<header>
  Werteneingabe:
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
