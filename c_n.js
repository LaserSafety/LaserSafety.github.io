function C_n(){
    var wellenlaenge = parseFloat(document.getElementById('wellenlaenge').value);
    var alpha = parseFloat(document.getElementById('alpha').value);

    var expositionsdauer = expositionsdauer_x * Math.pow(10, -expositionsdauer_y);
    var C_a, C_b, C_c, C_e;
    var alphamax, alphamin;
    alphamax=100;
    alphamin=1.5;

       if (wellenlaenge >= 400 && wellenlaenge <= 700) {
        C_a = 1;
    } else if (wellenlaenge > 700 && wellenlaenge <= 1050) {
        C_a = Math.pow(10, 0.002 * (wellenlaenge-700));
    } else if (wellenlaenge > 1050 && wellenlaenge <= 1400) {
        C_a = 5;
        document.getElementById('result').innerHTML = "Invalid C_a value";
        return;
    }
    
    if (wellenlaenge >= 400 && wellenlaenge <= 450) {
        C_b = 1;
    } else if (wellenlaenge > 450 && wellenlaenge <= 600) {
        C_b = Math.pow(10, 0.02 * (wellenlaenge-600));
        document.getElementById('result').innerHTML = "Invalid C_b value";
        return;
    }
    
    if (wellenlaenge >= 700 && wellenlaenge <= 1150) {
        C_c = 1;
    } else if (wellenlaenge > 1150 && wellenlaenge <= 1200) {
        C_c = Math.pow(10, 0.018 * (wellenlaenge-1150));
    } else if (wellenlaenge > 1200 && wellenlaenge <= 1400) {
        C_c = 8;
        document.getElementById('result').innerHTML = "Invalid C_c value";
        return;
    }
    
    
    if (alpha >= 0 && alpha <= 1.5) {
        C_e = 1;
    } else if (alpha > 1.5 && alpha <= 100) {
        C_e = alpha / 1.5;
    } else if (alpha > 100 && alpha <= 1000) {
        C_e = alphamax / alphamin;
        document.getElementById('result').innerHTML = "Invalid C_e value";
        return;
    }
}
export { C_a, C_b, C_c, C_e };
