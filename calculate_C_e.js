// calculate_C_e.js
export function calculate_C_e(alpha, alpha_max, alpha_min) {
    let C_e;
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alpha_max / alpha_min;
    } else {
        throw new Error("Invalid α value");
    }
    return C_e;
}
