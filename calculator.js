function calculate() {
    var expositionsdauer = parseFloat(document.getElementById('expositionsdauer').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var C_e = parseFloat(document.getElementById('C_e').value);
    
    var result;

    if (expositionsdauer >= 1E-13 && expositionsdauer <= 1E-11) {
        result = (1.5E-4) * C_e;
    } else {
        result = null;
    }
    
    document.getElementById('result').innerHTML = "Result: " + result;
}
