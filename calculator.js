function calculate() {
    var expositionsdauer_x = parseFloat(document.getElementById('expositionsdauer_x').value);
    var expositionsdauer_y = parseFloat(document.getElementById('expositionsdauer_y').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var C_e = parseFloat(document.getElementById('C_e').value);
    
    var expositionsdauer = expositionsdauer_x * Math.pow(10, -expositionsdauer_y);
    
    var result1, result2;
    var formula1, formula2;
    
    if (expositionsdauer === 1E-11) {
        result1 = (1.5E-4) * C_e;
        formula1 = "H = (1.5E-4) * C_e";
        
        result2 = (2.7E-4) * expositionsdauer * 0.75;
        formula2 = "H = (2.7E-4) * t * 0.75, where t = expositionsdauer";
        
        var minResult = Math.min(result1, result2);
        var minFormula = minResult === result1 ? formula1 : formula2;
        
        document.getElementById('result').innerHTML = "Result: " + minResult.toFixed(6) + " J*m^2" + "<br>Formula: " + minFormula;
    } else if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        result1 = (1.5E-4) * C_e;
        formula1 = "H = (1.5E-4) * C_e";
        
        document.getElementById('result').innerHTML = "Result: " + result1.toFixed(6) + " J*m^2" + "<br>Formula: " + formula1;
    } else if (expositionsdauer >= 1E-11 && expositionsdauer < 1E-9) {
        result2 = (2.7E-4) * expositionsdauer * 0.75;
        formula2 = "H = (2.7E-4) * t * 0.75, where t = expositionsdauer";
        
        document.getElementById('result').innerHTML = "Result: " + result2.toFixed(6) + " J*m^2" + "<br>Formula: " + formula2;
    } else {
        document.getElementById('result').innerHTML = "Invalid expositionsdauer value";
    }
}

