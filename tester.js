function calculate() {
    var expositionsdauer = parseFloat(document.getElementById('expositionsdauer').value);
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var alpha = parseFloat(document.getElementById('alpha').value);
    var betriebsart = document.getElementById('betriebsart').value;
    var pulsdauer_x = parseFloat(document.getElementById('pulsdauer_x').value);
    var pulsdauer_y = parseFloat(document.getElementById('pulsdauer_y').value);
    var frequenz = parseFloat(document.getElementById('frequenz').value);
    var t_H = pulsdauer_x * Math.pow(10, -pulsdauer_y);
    

    var result; //Endresultat
    var formula;//Endformel
    var optischer_bereich;

    var g = (frequenz * t_H);
    
    var C_a, C_b, C_c, C_e;
    
    var T_1, T_2, T_min;
    var alphamax, alphamin;
    alphamax=100;
    alphamin=1.5;
    
// h = (J/m^2) e = (W/m^2)

    var t;
        if (betriebsart === "D") {
        t = expositionsdauer;
        }
    
    var EIK;
    var MWK;
    var IFK;
            
    //Berechnung des Korrekturfaktors T_1
    if (wellenlaenge < 450) {
        T_1 = 10;
    }  else if (wellenlaenge >= 450 && wellenlaenge <= 500) {
        T_1 = Math.pow(10, (0.02 * (wellenlaenge - 450)));
    } else if (wellenlaenge > 500) {
        T_1 = 100;
    }

    //Berechnung des Korrekturfaktors T_2
    if (alpha <= 1.5) {
        T_2 = 10;
    } else if (alpha > 1.5 && alpha <= 100) {
        T_2 = Math.pow(10, ((alpha - 1.5)/98.5));
    } else if (alpha > 100) {
        T_2 = 100;
    }

    //Berechnung des Korrekturfaktors T_min
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
    
    //Berechnung des Korrekturfaktors T
    if (wellenlaenge > 315 && wellenlaenge <= 400) {
        T = 30000;
    } else if (wellenlaenge > 400 && wellenlaenge <= 1400) {
        T = T_2;
    } else if (wellenlaenge > 1400) {
        T = 10;
    }
    
    //Berechnung des Korrekturfaktors C_a        
    if (wellenlaenge >= 400 && wellenlaenge <= 700) {
        C_a = 1;
    } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
        C_a = Math.pow(10, 0.002 * (wellenlaenge-700));
    } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
        C_a = 5;
    }
    
    //Berechnung des Korrekturfaktors C_b
    if (wellenlaenge >= 400 && wellenlaenge <= 450) {
        C_b = 1;
    } else if (wellenlaenge > 450 && wellenlaenge <= 600) {
        C_b = Math.pow(10, 0.02 * (wellenlaenge-600));
    }
    
    //Berechnung des Korrekturfaktors C_c
    if (wellenlaenge >= 700 && wellenlaenge <= 1150) {
        C_c = 1;
    } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
        C_c = Math.pow(10, 0.018 * (wellenlaenge-1150));
    } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
        C_c = 8;
    }

    //Berechnung des Korrekturfaktors C_e
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alphamax / alphamin;
    }

    //Grund für diese Variablen wird später eindeutig gemacht
    var result1; 
    var result2;
    var result3;
    var result4;
    var result5;
    var result6;
    var formula1;
    var formula2;
    var formula3;
    var formula4;
    var formula5;
    var formula6;
    
    //Pulsdauerwerte von 1E-13 bis 1E-11
    
    if (t_H >= 1E-13 && t_H < 1E-11) {
        if (wellenlaenge >= 100 && wellenlaenge <= 302) {
            result1 = (3E10);
            formula1 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - C";
        } else if (wellenlaenge >= 303 && wellenlaenge <= 314) {
            result1 = (3E10);
            formula1 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - B";
        } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
            result1 = (3E10);
            formula1 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - A";
        } else if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result1 = (1.5E-4) * C_e;
            formula1 = "H = (1.5E-4) * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result1 = (1.5E-4) * C_a * C_e;
            formula1 = "H = (1.5E-4) * C<sub>a</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result1 = (1.5E-3) * C_c * C_e;
            formula1 = "H = (1.5E-3) * C<sub>c</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result1 = Math.pow(10, 12);
            formula1 = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result1 = Math.pow(10, 13);
            formula1 = "E = 10<sup>13</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result1 = Math.pow(10, 12);
            formula1 = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result1 = Math.pow(10, 11);
            formula1 = "E = 10<sup>11</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1E-11 TO 1E-9
    
    if (t_H > 1E-11 && t_H < 1E-9) {
        if (wellenlaenge >= 100 && wellenlaenge <= 302) {
            result2 = (3E10);
            formula2 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - C";
        } else if (wellenlaenge >= 303 && wellenlaenge <= 314) {
            result2 = (3E10);
            formula2 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - B";
        } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
            result2 = (3E10);
            formula2 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - A";
        } else if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result2 = (2.7E4 * Math.pow(t,0.75)) * C_e;
            formula2 = "H = (2.7E4 * t<sup>0.75</sup>) * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result2 = (2.7E4 * Math.pow(t_H,0.75)) * C_a * C_e;
            formula2 = "H = (2.7E4 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result2 = (2.7E4 * Math.pow(t_H,0.75)) * C_c * C_e;
            formula2 = "H = (2.7E5 * t<sup>0.75</sup>) * C<sub>c</sub> * C<sub>e</sub>";
            optischer_bereich = "VIS & IR - A";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result2 = Math.pow(10, 12);
            formula2 = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result2 = Math.pow(10, 13);
            formula2 = "E = 10<sup>13</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result2 = Math.pow(10, 12);
            formula2 = "E = 10<sup>12</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result2 = Math.pow(10, 11);
            formula2 = "E = 10<sup>11</sup>";
            optischer_bereich = "IR - B & IR - C";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    //Grenzwert (1e-11) wird hier bestimmt
    if (t_H === 1e-11) {
        if (result1 < result2) { //Werte werden verglichen
        result = result1;
        formula = formula1;
    } else {                     //kleinerer Wert wird genommen
        result = result2;        //Endresultat wird festgelegt
        formula = formula2;
        }
    }
    
    //Pulsdauerwerte von 1E-9 bis 1E-7
    
    if (t_H > 1E-9 && t_H < 1E-7) {
        if (wellenlaenge >= 100 && wellenlaenge <= 302) {
            result3 = (3E10);
            formula3 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - C";
        } else if (wellenlaenge >= 303 && wellenlaenge <= 314) {
            result3 = (3E10);
            formula3 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - B";
        } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
            result3 = (3E10);
            formula3 = "E = 3 * 10<sup>10</sup>";
            optischer_bereich = "UV - A";
        } else if (wellenlaenge > 400 && wellenlaenge <= 700) {
            result3 = (5E-3) * C_e;
            formula3 = "H = (5E-3) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result3 = (5E-3) * C_a * C_e;
            formula3 = "H = (5E-3) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result3 = (5E-2) * C_c * C_e;
            formula3 = "H = (5E-2) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result3 = Math.pow(10, 3);
            formula3 = "H = 10<sup>3</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result3 = Math.pow(10, 4);
            formula3 = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge < 2600) {
            result3 = Math.pow(10, 3);
            formula3 = "H = 10<sup>3</sup>";
        } else if (wellenlaenge >= 2600 && wellenlaenge <= 1000000) {
            result3 = 100;
            formula3 = "H = 100";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }

    // Grenzwert (1e-9) wird hier bestimmt
    if (t_H === 1e-9) {
        if (result2 < result3) { //Werte werden verglichen
            result = result2;
            formula = formula2;
        } else {                 //kleinerer Wert wird genommen
            result = result3;    //Endresultat wird festgelegt
            formula = formula3;
        }
    }


    
    //pulsdauerwerte von 1E-7 bis 1.8E-5
    //TODO


    
    // Grenzwert (1e-7) wird hier bestimmt
    if (t_H === 1e-7) {
        if (result3 < result4) { //Werte werden verglichen
            result = result3;
            formula = formula3;
        } else {                 //kleinerer Wert wird genommen
            result = result4;    //Endresultat wird festgelegt
            formula = formula4;
        }
    }
    //Pulsdauerwerte von 1.8E-5 bis 5E-5

    if (t_H >= 1.8E-5 && t_H < 5E-5) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(t_H, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(t_H, 0.75)) * C_a * C_e;
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
            result = 5.6 * Math.pow(10, 3) * Math.pow(t_H, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 5E-5 TO 1E-3

    if (t_H >= 5E-5 && t_H < 1E-3) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(t_H, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(t_H, 0.75)) * C_a * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (90 * Math.pow(t_H, 0.75)) * C_c * C_e;
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
            result = 5.6 * Math.pow(10, 3) * Math.pow(t_H, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    
    // 1E-3 TO 10

    if (t_H >= 1E-3 && t_H <= 10 ) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (18 * Math.pow(t_H, 0.75)) * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>e</sub>";
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (18 * Math.pow(t_H, 0.75)) * C_a * C_e;
            formula = "H = (18 * t<sup>0.75</sup>) * C<sub>a</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
            result = (90 * Math.pow(t_H, 0.75)) * C_c * C_e;
            formula = "H = (90 * t<sup>0.75</sup>) * C<sub>c</sub> * C<sub>e</sub>";
        } else if (wellenlaenge > 1400 && wellenlaenge <= 1500) {
            result = 5.6E3 * Math.pow(t_H, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else if (wellenlaenge > 1500 && wellenlaenge <= 1800) {
            result = Math.pow(10, 4);
            formula = "H = 10<sup>4</sup>";
        } else if (wellenlaenge > 1800 && wellenlaenge <= 2600) {
            result = 5.6E3 * Math.pow(t_H, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else if (wellenlaenge > 2600 && wellenlaenge <= 1000000) {
            result = 5.6 * Math.pow(10, 3) * Math.pow(t_H, 0.25);
            formula = "H = 5.6E3 * t<sup>0.25</sup>";
        } else {
            document.getElementById('result').innerHTML = "Invalid wavelength value";
            return;
        }
    }
    var resultX;
    var formulaX;
    if (expositionsdauer >= 10 && expositionsdauer <= 100) {
      if (wellenlaenge >= 100 && wellenlaenge <= 302) {
        resultX = 30;
        formulaX = "H = 30";
    } else if (wellenlaenge = 303) {
        resultX = 40;
        formulaX = "H = 40";
    } else if (wellenlaenge = 304) {
        resultX = 60;
        formulaX = "H = 60";
    } else if (wellenlaenge = 305) {
        resultX = 100;
        formulaX = "H = 100";
    } else if (wellenlaenge = 306) {
        resultX = 160;
        formulaX = "H = 160";
    } else if (wellenlaenge = 307) {
        resultX = 250;
        formulaX = "H = 250";
    } else if (wellenlaenge = 308) {
        resultX = 400;
        formulaX = "H = 400";
    } else if (wellelaenge = 309) {
        resultX = 630;
        formulaX = "H = 630";
    } else if (wellenlaenge = 310) {
        resultX = 1000;
        formulaX = "H = 1000";
    } else if (wellenlaenge = 311) {
        resultX = 1600;
        formulaX = "H = 1600";
    } else if (wellenlaenge = 312) {
        resultX = 2500;
        formulaX = "H = 2500";
    } else if (wellenlaenge = 313) {
        resultX = 4000;
        formulaX = "H = 4000";
    } else if (wellenlaenge = 314) {
        resultX = 6300;
        formulaX = "H = 6300";
    } else if (wellenlaenge >= 315 && wellenlaenge <= 400) {
        resultX = 10000;
        formulaX = "H = 10000";
    } else {
        document.getElementById('result').innerHTML = "Invalid expositionsdauer value";
        return;
    }
    }
    // Replace asterisks with the dot symbol in the formula
    formula = formula.replace(/\*/g, "&sdot;"); 

   // Format result
var resultH, resultE;

// Calculate result for H or E based on the formula
if (formula.includes("E =")) {
    resultE = parseFloat(result); // Convert result to a floating-point number for further calculations
    resultH = resultE * t_H; // Calculate H if the formula is E = xyz
} else if (formula.includes("H =")) {
    resultH = parseFloat(result); // Convert result to a floating-point number for further calculations
    resultE = resultH / t_H; // Calculate E if the formula is H = xyz
} else {
    document.getElementById('result').innerHTML = "Invalid formula";
    return;
}

// Format result for E
var resultStringE = resultE.toExponential(2); // Convert to exponential notation with 2 decimal places

// Separate the coefficient and exponent parts for E
var partsE = resultStringE.split("e");
var coefficientE = parseFloat(partsE[0]);
var exponentE = parseInt(partsE[1]);

// Format result for H
var resultStringH = resultH.toExponential(2); // Convert to exponential notation with 2 decimal places

// Separate the coefficient and exponent parts for H
var partsH = resultStringH.split("e");
var coefficientH = parseFloat(partsH[0]);
var exponentH = parseInt(partsH[1]);

// Display result and formula with appropriate units

  if (betriebsart === 'I') {
       // Original calculation
         // Additional calculations based on g and t_H
        var E_g = resultH / g;
        // Find the smallest value among the calculated results
        var resultegw = Math.min(resultH, E_g);
  }
  
 var resultfin;
 var t_IFK;
 var t_MWK = 100;
    if (t_H < T_min) {
       t_IFK = T_min;
    } else {
       t_IFK = t_H;
    }

 if (result.includes("t")) {
    EIK = result.replace(t, t_H);
    MWK = result.replace(t, t_MWK);
    IFK = result.replace(t, t_IFK);
 }
 resultfin = Math.min(EIK, MWK, IFK);

    document.getElementById('result').innerHTML = "Formula: " + formula + "<br>Result (H): " + coefficientH + " &sdot; 10<sup>" + exponentH + "</sup> J/m<sup>2</sup><br>Result (E): " + coefficientE + " &sdot; 10<sup>" + exponentE + "</sup> W/m<sup>2</sup><br>Optischer Bereich: " + optischer_bereich + "<br>EIK: " + resultE + "<br>MWK: " + E_g + "<br>g: " + g + "<br>Expo result: " + resultX + "<br>formula expo: " + formulaX + "Endresultat: " + resultfin;
}
