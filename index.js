/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert-btn");


inputEl.addEventListener("keydown",function(event){
    console.log(event)
    if (event.key === "Enter") {
        event.preventDefault();
        convertBtn.click();
      }
})

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  let imperialArr = convertToImperial(Number(inputValue));
  let metricArr = convertToMetric(Number(inputValue));
  render(imperialArr, metricArr, inputValue);
});

function render(imperialArr, metricArr, val) {
  lengthEl.innerText = `${val} meters = ${imperialArr[0]} feet | ${val} feet = ${metricArr[0]} meters`;
  volumeEl.innerText = `${val} liters = ${imperialArr[1]} gallons | ${val} gallons = ${metricArr[1]} liters`;
  massEl.innerText = `${val} kilos = ${imperialArr[2]} pounds | ${val} pounds = ${metricArr[2]} kilos`;
}

function convertToImperial(inputValue) {
  let feet = (inputValue * 3.28084).toFixed(3);
  let gallon = (inputValue * 0.264172).toFixed(3);
  let pound = (inputValue * 2.20462).toFixed(3);
  let imperialArr = [feet, gallon, pound];
  return imperialArr;
}

function convertToMetric(inputValue) {
  let meter = (inputValue * 0.3048).toFixed(3);
  let liters = (inputValue * 3.78541).toFixed(3);
  let kilogram = (inputValue * 0.453592).toFixed(3);
  let metricArr = [meter, liters, kilogram];
  return metricArr;
}
