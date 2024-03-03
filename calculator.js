function calculate() {
    var expositionsdauer = parseFloat(document.getElementById('expositionsdauer').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var C_e = parseFloat(document.getElementById('C_e').value);
    
    var result = expositionsdauer * wellenlaenge * C_e;
    
    document.getElementById('result').innerHTML = "Result: " + result;
}
