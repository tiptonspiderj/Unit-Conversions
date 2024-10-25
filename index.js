const meterToFeetConv = 3.2808399
const feetToMeterConv = 0.3048
const literToGallonConv = 0.26417205
const gallonToLiterConv = 3.78541178
const kiloToPoundConv = 2.20462262
const poundToKiloConv = 0.45359237

const input = document.getElementById("input")
const length = document.getElementById("lengthInfo")
const volume = document.getElementById("volumeInfo")
const mass = document.getElementById("massInfo")
const button= document.getElementById("convert-btn")

function setInitialPage() {
  input.value = 20
  stringBuiler(input.value)
}
setInitialPage()

button.addEventListener("click", function() {
  stringBuiler(input.value)
})

function stringBuiler(input) {  
    const meters = convertFeetToMeters(input)
    const feet = convertMetersToFeet(input)
    length.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
 
    const liters = convertGallonsToLiters(input)
    const gallons = convertLitersToGallons(input)
    volume.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
 
    const kilos = convertPoundsToKilos(input)
    const pounds = convertKilosToPounds(input)
    mass.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos` 
}

function convertFeetToMeters(input) { 
  return (input * (feetToMeterConv)).toFixed(3)
}

function convertMetersToFeet(input) {
  return (input * (meterToFeetConv)).toFixed(3)
}

function convertGallonsToLiters(input) { 
  return (input * (gallonToLiterConv)).toFixed(3)
}

function convertLitersToGallons(input) { 
  return (input * (literToGallonConv)).toFixed(3)
}

function convertKilosToPounds(input) {
  return (input * (kiloToPoundConv)).toFixed(3)
}

function convertPoundsToKilos(input) {
  return (input * (poundToKiloConv)).toFixed(3)
}