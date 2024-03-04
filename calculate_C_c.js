// calculate_C_c.js
export function calculate_C_c(wellenlaenge) {
    let C_c;
    if (wellenlaenge <= 1150) {
        C_c = 1;
    } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
        C_c = Math.pow(10, 0.018 * (wellenlaenge - 1150));
    } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
        C_c = 8;
    } else {
        throw new Error("Invalid wavelength value for C_c calculation");
    }
    return C_c;
}
