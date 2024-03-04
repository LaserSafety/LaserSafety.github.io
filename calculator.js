function calculate() {
    var expositionsdauer = parseFloat(document.getElementById('expositionsdauer').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var C_e = parseFloat(document.getElementById('C_e').value);
    
    var result;
    var formula;

    if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        result = (1.5E-4) * C_e;
        formula = "H = (1.5E-4) * C_e";
    } else if (expositionsdauer >= 1E-11 && expositionsdauer < 1E-9) {
        result = (2.7E-4) * expositionsdauer * 0.75;
        formula = "H = (2.7E-4) * t * 0.75, where t = expositionsdauer";
    } else {
        result = null;
        formula = "Invalid expositionsdauer value";
    }
    
    if (result !== null) {
        document.getElementById('result').innerHTML = "Result: " + result.toFixed(6) + " J*m^2" + "<br>Formula: " + formula;
    } else {
        document.getElementById('result').innerHTML = "Result: " + result + "<br>Formula: " + formula;
    }
}
