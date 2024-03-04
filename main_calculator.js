// main_calculator.js
import { calculate_C_e } from './calculate_C_e.js';
import { calculate_C_c } from './calculate_C_c.js';
import { calculate_formula } from './calculate_formula.js';

function calculate() {
    // Retrieve input values
    const expositionsdauer_x = parseFloat(document.getElementById('expositionsdauer_x').value);
    const expositionsdauer_y = parseFloat(document.getElementById('expositionsdauer_y').value);
    const wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    const alpha = parseFloat(document.getElementById('alpha').value);
    const alpha_max = parseFloat(document.getElementById('alphamax').value);
    const alpha_min = parseFloat(document.getElementById('alphamin').value);
    
    const expositionsdauer = expositionsdauer_x * Math.pow(10, -expositionsdauer_y);
    
    // Call calculate_C_e to calculate C_e
    const C_e = calculate_C_e(alpha, alpha_max, alpha_min);
    
    // Call calculate_C_c to calculate C_c
    const C_c = calculate_C_c(wellenlaenge);
    
    // Call calculate_formula to calculate the formula
    try {
        const { formula, result } = calculate_formula(expositionsdauer, wellenlaenge, C_c, C_e);
        // Display the result
        document.getElementById('result').innerHTML = "Formula: " + formula + "<br>Result: " + result.toFixed(6) + " J·m&sup2;";
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
}
