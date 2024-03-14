function calculate() {
    var expositionsdauer_x = parseFloat(document.getElementById('expositionsdauer_x').value);
    var expositionsdauer_y = parseFloat(document.getElementById('expositionsdauer_y').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var alpha = parseFloat(document.getElementById('alpha').value);
    
    var expositionsdauer = expositionsdauer_x * Math.pow(10, -expositionsdauer_y);
    
    var result;
    var formula;

    var optischer_bereich;
    
    // Calculate C variables based on wellenlaenge
    var C_a, C_b, C_c, C_e;
    // Calculate T vairables basen on wellenlaenge
    var T_1, T_2, T_min;
    var alphamax, alphamin;
    alphamax=100;
    alphamin=1.5;

// h = (J/m^2) e = (W/m^2)
    if (wellenlaenge < 450) {
        T_1 = 10;
    }  else if (wellenlaenge >= 450 && wellenlaenge <= 500) {
        T_1 = Math.pow(10, (0.02 * (wellenlaenge - 450));
    } else if (wellenlaenge > 500) {
        T_1 = 100;
    }

    if (alpha <= 1.5) {
        T_2 = 10;
    } else if (alpha > 1.5 && alpha <= 100) {
        T_2 = Math.pow(10, ((alpha - 1.5)/98.5);
    } else if (alpha > 100) {
        T_2 = 100;
    }

    if (wellenlaenge > 315 && wellenlaenge <= 400) {
        T_min = Math.pow(10, -9);
    }  else if (wellenlaenge > 400 && wellenlaenge <= 1050) {
        T_min = 1.8 * Math.pow(10, -5);
    }  else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
        T_min = 5 * Math.pow(10, -5);
    }  else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
        T_min = Math.pow(10, -4);
    }  else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
        T_min = 10;
    }  else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
        T_min = 0.001;
    }  else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
        T_min = Math.pow(10, -7);
    }
        
            
    if (wellenlaenge >= 400 && wellenlaenge <= 700) {
        C_a = 1;
    } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
        C_a = Math.pow(10, 0.002 * (wellenlaenge-700));
    } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
        C_a = 5;
    }
    
    if (wellenlaenge >= 400 && wellenlaenge <= 450) {
        C_b = 1;
    } else if (wellenlaenge > 450 && wellenlaenge <= 600) {
        C_b = Math.pow(10, 0.02 * (wellenlaenge-600));
    }
    
    if (wellenlaenge >= 700 && wellenlaenge <= 1150) {
        C_c = 1;
    } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
        C_c = Math.pow(10, 0.018 * (wellenlaenge-1150));
    } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
        C_c = 8;
    }
    
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alphamax / alphamin;
    }

    // 1E-13 TO 1E-11
    
    // Choose the appropriate formula based on expositionsdauer and wellenlaenge
    if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        if (wellenlaenge >= 100 && wellenlaenge <= 302) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - C";
        } else if (wellenlaenge >= 303 && wellenlaenge <= 314) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - B";
        } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - A";
        } else if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (1.5E-4) * C_e;
            formula = "H = (1.5E-4) * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (1.5E-4) * C_a * C_e;
            formula = "H = (1.5E-4) * C<sub>a</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (1.5E-3) * C_c * C_e;
            formula = "H = (1.5E-3) * C<sub>c</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 12);
            formula = "E = 10<sup>12</sup>";
            optischer_bereich = ">IR - B & IR - C";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 13);
            formula = "E = 10<sup>13</sup>";
            optischer_bereich = ">IR - B & IR - C";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 12);
            formula = "E = 10<sup>12</sup>";
            optischer_bereich = ">IR - B & IR - C";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = Math.pow(10, 11);
            formula = "E = 10<sup>11</sup>";
            optischer_bereich = ">IR - B & IR - C";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1E-11 TO 1E-9
    
    if (expositionsdauer >= 1E-11 && expositionsdauer < 1E-9) {
        if (wellenlaenge >= 100 && wellenlaenge <= 302) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - C";
        } else if (wellenlaenge >= 303 && wellenlaenge <= 314) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - B";
        } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
            result = (3E10);
            formula = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - A";
        } else if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (2.7E4 * Math.pow(expositionsdauer,0.75)) * C_e;
            formula = "H = (2.7E4 * t<sup>0.75</sup>) * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (2.7E4 * Math.pow(expositionsdauer,0.75)) * C_a * C_e;
            formula = "H = (2.7E4 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (2.7E4 * Math.pow(expositionsdauer,0.75)) * C_c * C_e;
            formula = "H = (2.7E5 * t<sup>0.75</sup>) * C<sub>c</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 12);
            formula = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 13);
            formula = "E = 10<sup>13</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 12);
            formula = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = Math.pow(10, 11);
            formula = "E = 10<sup>11</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1E-9 TO 1E-7
    
    if (expositionsdauer >= 1E-9 && expositionsdauer < 1E-7) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (5E-3) * C_e;
            formula = "H = (5E-3) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (5E-3) * C_a * C_e;
            formula = "H = (5E-3) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (5E-2) * C_c * C_e;
            formula = "H = (5E-2) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 4);
            formula = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = 100;
            formula = "H = 100";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1.8E-5 TO 5E-5

    if (expositionsdauer >= 1.8E-5 && expositionsdauer < 5E-5) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_a * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (5E-2) * C_c * C_e;
            formula = "H = (5E-2) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 4);
            formula = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = 5.6 * Math.pow(10, 3) * Math.pow(expositionsdauer, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 5E-5 TO 1E-3

    if (expositionsdauer >= 5E-5 && expositionsdauer < 1E-3) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_a * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (90 * Math.pow(expositionsdauer, 0.75)) * C_c * C_e;
            formula = "H = (90 * t<sup>0.75</sup>) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 4);
            formula = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = Math.pow(10, 3);
            formula = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = 5.6 * Math.pow(10, 3) * Math.pow(expositionsdauer, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1E-3 TO 10

    if (expositionsdauer >= 1E-3 && expositionsdauer < 10 ) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(expositionsdauer, 0.75)) * C_a * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (90 * Math.pow(expositionsdauer, 0.75)) * C_c * C_e;
            formula = "H = (90 * t<sup>0.75</sup>) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = 5.6E3 * Math.pow(expositionsdauer, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 4);
            formula = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = 5.6E3 * Math.pow(expositionsdauer, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = 5.6 * Math.pow(10, 3) * Math.pow(expositionsdauer, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // Replace asterisks with the dot symbol in the formula
    formula = formula.replace(/\*/g, "&sdot;"); 
    // Format result
    result = result.toFixed(6) + " J/m<sup>2</sup>";

    // Display result and formula
    document.getElementById('result').innerHTML = "Formula: " + formula + "<br>Result: " + result + "<br>Optischer Bereich: " + optischer_bereich;
}
