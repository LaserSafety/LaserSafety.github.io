function calculate() {
    var expositionsdauer_x = parseFloat(document.getElementById('expositionsdauer_x').value);
    var expositionsdauer_y = parseFloat(document.getElementById('expositionsdauer_y').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var alpha = parseFloat(document.getElementById('alpha').value);
    var alpha_max = parseFloat(document.getElementById('alphamax').value);
    var alpha_min = parseFloat(document.getElementById('alphamin').value);
    
    var expositionsdauer = expositionsdauer_x * Math.pow(10, -expositionsdauer_y);
    
    var result;
    var formula;
    
    var C_a;
    if (wellenlaenge >= 0 && alpha <= 700) {
        C_e = 1;
    } if (wellenlaenge >= 700 && alpha <= 1050) {
        C_e = 10 * Math.pow(0.002 * (wellenlaenge-700));
    } if (wellenlaenge >= 1050 && alpha <= 1400) {
        C_e = 5;
    }
    var C_b;
    if (wellenlaenge >= 400 && alpha <= 450) {
        C_e = 1;
    } if (wellenlaenge >= 450 && alpha <= 600) {
        C_e = 10 * Math.pow(0.02 * (wellenlaenge-600));
    }
    var C_c;
    if (wellenlaenge >= 700 && alpha <= 1150) {
        C_e = 1;
    } if (wellenlaenge >= 1150 && alpha <= 1200) {
        C_e = 10 * Math.pow(0.018 * (wellenlaenge-1150));
    }
    var C_e;
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alpha_max / alpha_min;
    }
    
    if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (1.5E-4) * C_e;
            formula = "H = (1.5E-4) * C_e";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (1.5E-4) * C_a * C_e;
            formula = "H = (1.5E-4) * C_a * C_e";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1150) {
            result = (1.5E-3) * C_c * C_e;
            formula = "H = (1.5E-3) * C_c * C_e";
        } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
            result = (1.5E-3) * C_c * C_e;
            formula = "H = (1.5E-3) * C_c * C_e";
        } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
            result = (1.5E-3) * C_c * C_e;
            formula = "H = (1.5E-3) * C_c * C_e";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else if (expositionsdauer >= 1E-11 && expositionsdauer <= 1E-9) {
        if (wellenlaenge >= 1050 && wellenlaenge <= 1400) {
            var C_c = wellenlaenge <= 1200 ? 1 : 8;
            var t = expositionsdauer / Math.pow(10, -9); // Convert to seconds
            result = (2.7E-4) * Math.pow(t, 0.75) * C_c * C_e;
            formula = "H = (2.7E-4) * t^0.75 * C_c * C_e";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else if (expositionsdauer >= 1E-9 && expositionsdauer <= 1E-8) {
        if (wellenlaenge >= 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 12);
            formula = "E = 10^12";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else if (expositionsdauer >= 1E-9 && expositionsdauer <= 1E-8) {
        if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 13);
            formula = "E = 10^13";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else if (expositionsdauer >= 1E-9 && expositionsdauer <= 1E-8) {
        if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 12);
            formula = "E = 10^12";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else if (expositionsdauer >= 1E-9 && expositionsdauer <= 1E-8) {
        if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = Math.pow(10, 11);
            formula = "E = 10^11";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else {
        document.getElementById('result').innerHTML = "Invalid expositionsdauer value";
        return;
    }

    formula = formula.replace(/\*/g, "&sdot;"); // Replace asterisks with the dot symbol
    result = result.toFixed(6) + " J&sdot;m<sup>2</sup>";

    document.getElementById('result').innerHTML = "Formula: " + formula + "<br>Result: " + result;
}
