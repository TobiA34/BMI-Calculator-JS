// FT TO METER multiply your length value by 0.3048
// kg to lbs 1kg * 2.20462262185
//

const ftInput = document.getElementById("ft-input");
const inchesInput = document.getElementById("inches-input");
const weightInput = document.getElementById("weight-input");

const result = document.getElementById("result");

let message = document.getElementById("message");

const weightInKg = document.getElementById("weight-in-kg");
const weightInSt = document.getElementById("weight-in-st");
const weightInm = document.getElementById("weight-in-m");

const heightDropdown = document.getElementById("heightDropdown");

let total = 0;

function showMessage(total) {
  if (total <= 16) {
    message.textContent = "Severely Underweight";
  } else if (total >= 16.0 && total <= 18.4) {
    message.textContent = "Underweight";
  } else if (total >= 18.5 && total <= 24.9) {
    message.textContent = "Normal";
  } else if (total >= 25.0 && total <= 29.9) {
    message.textContent = "Overweight";
  } else if (total >= 30.0 && total <= 34.9) {
    message.textContent = "Moderately Obese";
  } else if (total >= 35.0 && total <= 39.9) {
    message.textContent = "Severeley Obese";
  } else {
    message.textContent = "morbidly Obese";
  }
}

function reset() {
  total = 0;
  message = "";
}

function calculateBmi(e) {
  showMessage(0);
  ftToMetres = ftInput.value / inchesInput.value;
  console.log(ftToMetres);
  console.log(ftInput.value);
  console.log(inchesInput.value);

  total = weightInput.value / (ftToMetres * 2);
  console.log(total);
  console.log(ftToMetres * 2);

  showMessage(total);
  result.textContent = "Your bmi is: " + Math.floor(total) ;
  reset();
}
