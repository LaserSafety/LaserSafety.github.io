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
    
    if (expositionsdauer === 1E-11) {
        result = (1.5E-4) * alpha;
        formula = "H = (1.5E-4) * α";
    } else if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        result = (1.5E-4) * alpha;
        formula = "H = (1.5E-4) * α";
    } else if (expositionsdauer >= 1E-11 && expositionsdauer < 1E-9) {
        result = (2.7E-4) * expositionsdauer * 0.75;
        formula = "H = (2.7E-4) * t * 0.75, where t = expositionsdauer";
    } else {
        document.getElementById('result').innerHTML = "Invalid expositionsdauer value";
        return;
    }

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

    result *= C_e;

    document.getElementById('result').innerHTML = "Result: " + result.toFixed(6) + " J*m^2" + "<br>Formula: " + formula + ", C_e = " + C_e.toFixed(6);
}
