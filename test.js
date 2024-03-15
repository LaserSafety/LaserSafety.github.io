
function calculate() {
  var impulsdauer = parseFloat(document.getElementById("impulsdauer").value);
  var frequenz = parseFloat(document.getElementById("frequenz").value);
  
  // Example calculation
  var result = impulsdauer * frequenz;
  
  document.getElementById("result").textContent = "Result: " + result;
}
