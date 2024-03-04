// calculate_formula.js
export function calculate_formula(expositionsdauer, wellenlaenge, C_a, C_c, C_e) {
    let result;
    if (expositionsdauer >= 1E-13 && expositionsdauer < 1E-11) {
        if (wellenlaenge >= 400 && wellenlaenge <= 700) {
            result = (1.5E-4) * C_e;
        } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
            result = (1.5E-4) * C_a * C_e;
        } else if (wellenlaenge > 1050 && wellenlaenge <= 1150) {
            result = (1.5E-3) * C_c * C_e;
        } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
            result = (1.5E-3) * C_c * C_e;
        } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
            result = (1.5E-3) * C_c * C_e;
        } else {
            throw new Error("Invalid wavelength value");
        }
    } else {
        throw new Error("Invalid expositionsdauer value");
    }
    return result;
}
