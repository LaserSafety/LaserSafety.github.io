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
    var C_values = [];
    
    var C_e;
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alpha_max / alpha_min;
    } else {
        document.getElementById('result').innerHTML = "Invalid α value";
        return;
    }
    
    if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (1.5E-4) * C_e;
            formula = "H = (1.5E-4) * C_e";
            C_values.push("C_e = " + C_e.toFixed(6));
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            var C_a = wellenlaenge <= 700 ? 1 : Math.pow(10, 0.02 * (wellenlaenge - 700));
            result = (1.5E-4) * C_a * C_e;
            formula = "H = (1.5E-4) * C_a * C_e";
            C_values.push("C_a = " + C_a.toFixed(6));
            C_values.push("C_e = " + C_e.toFixed(6));
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (1.5E-4) * 5 * C_e;
            formula = "H = (1.5E-4) * 5 * C_e";
            C_values.push("C_e = " + C_e.toFixed(6));
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    } else {
        document.getElementById('result').innerHTML = "Invalid expositionsdauer value";
        return;
    }

    document.getElementById('result').innerHTML = "Result: " + result.toFixed(6) + " J &sdot; m^2" + "<br>Formula: " + formula + ", C_e = " + C_e.toFixed(6);
}
