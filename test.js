
function calculate() {
  var impulsdauer = parseFloat(document.getElementById("wellenlaenge").value);
  var frequenz = parseFloat(document.getElementById("alpha").value);
  
  // Example calculation
  var result = impulsdauer * frequenz;
  
  document.getElementById("result").textContent = "Result: " + result;
}
