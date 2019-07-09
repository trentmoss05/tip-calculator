document.getElementById("tipAmount").style.display = "none";
document.getElementById("each").style.display = "none";

function calculate() {
  let billAmount = document.getElementById("billAmount").value;
  let serviceQual = document.getElementById("service").value;
  let numPeople = document.getElementById("numPeople").value;
  if (billAmount === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (billAmount * serviceQual) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("tipAmount").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("calculate").onclick = function() {
  calculate();
};
