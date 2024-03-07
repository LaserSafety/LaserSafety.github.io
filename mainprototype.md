---
permalink: /prototype.html
---
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laser Safety</title>
<!-- Link to the CSS file -->
    <link rel="stylesheet" href="styles.css"> 
</head>
<!-- header content -->
<body>
    <header>
        Werteeingabe:
        <div class="header-trapezoid"></div>
    </header>
<!-- navigation menu content -->
    <section>
        <nav>
            <ul>
                <li><a href="#">Expositionsdauer</a></li>
                <li><a href="#">Wellenlaenge</a></li>
                <li><a href="#">&#945;</a></li>
            </ul>
        </nav>
<!-- main content -->
        <form id="myForm">
            <section id="Expositionsdauer">
                <article>
                    <h1>Expositionsdauer (x&sdot;10<sup>-y</sup>)</h1>
                    <p>Enter expositionsdauer in the format xE-y:
                        <br><b>t</b> = <input type="text" id="expositionsdauer_x"> &sdot;10<sup><bold>-</bold></sup> <input type="number" id="expositionsdauer_y">in <b>s</b></p>
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
<!-- footer content -->
    <footer>
        <p><input type="submit" value="Ausrechnen" onclick="calculate()"><input type="reset" value="Zur&uuml;cksetzen"></p>
        <p id="result"></p>
        <div class="settings-btn" id="settingsBtn">
<!--force image to work as the button -->
            <img src="IMG_0217.png" alt="Settings" class="rotate-settings">
        </div>
        <div class="menu" id="menu">
<!-- menu content -->
            <p><h1>Settings</h1></p>
            <p><h2>Theme</h2>
                <br>Light
                <br>Dark
            </p>
        </div>
    </footer> 
<!-- JavaScript file links -->
    <!-- Link to the JavaScript file for calculations -->
    <script src="calculator.js"></script>
    <!-- Link to the JavaScript file for menu transitions -->
    <script src="protologic.js"></script>

</body>

</html>
