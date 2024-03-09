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
    <!-- Include slider styles -->
    <style>
        .slider-container {
            display: inline-block;
            position: relative;
            width: 34px;
            height: 60px;
        }

        .slider-checkbox {
            display: none;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            border-radius: 34px;
            transition: .4s;
            z-index: 5;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 30px;
            background-color: white;
            border-radius: 50%;
            transition: .4s;
            z-index: 5;
        }

        .slider-checkbox:checked+.slider {
            background-color: #2196F3;
        }

        .slider-checkbox:checked+.slider:before {
            transform: translateY(26px);
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
    <footer>
        <p><input type="submit" value="Ausrechnen" onclick="calculate()"><input type="reset" value="Zur&uuml;cksetzen"></p>
        <p id="result"></p>
        <div class="settings-btn" id="settingsBtn">
            <img src="IMG_0217.png" alt="Settings" class="rotate-settings">
        </div>
        <div class="menu" id="menu">
            <p><h1>Settings</h1></p>
            <p><h2>Theme</h2>
                <br>Light
                <label class="slider-container">
                    <input type="checkbox" class="slider-checkbox">
                    <span class="slider"></span>
                </label>
                Dark
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
