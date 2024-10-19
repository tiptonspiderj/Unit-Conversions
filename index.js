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
  stringBuiler(input.value, length)
  stringBuiler(input.value, volume)
  stringBuiler(input.value, mass)
}
setInitialPage()

button.addEventListener("click", function() {
  stringBuiler(input.value, length)
  stringBuiler(input.value, volume)
  stringBuiler(input.value, mass)
})

function stringBuiler(input, elementID) {
  if (elementID === length){
    let meters = convertFeetToMeters(input)
    let feet = convertMetersToFeet(input)
    elementID.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meters} meters`
  } else if (elementID === volume){
    let liters = convertGallonsToLiters(input)
    let gallons = convertLitersToGallons(input)
    elementID.textContent = `${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters`
  } else {
    let kilos = convertPoundsToKilos(input)
    let pounds = convertKilosToPounds(input)
    elementID.textContent = `${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`
  }
}

function convertFeetToMeters(input) {
  let meters = (input * (feetToMeterConv)).toFixed(3)
  return meters
}

function convertMetersToFeet(input) {
  let feet = (input * (meterToFeetConv)).toFixed(3)
  return feet
}

function convertGallonsToLiters(input) {
  let liters = (input * (gallonToLiterConv)).toFixed(3)
  return liters
}

function convertLitersToGallons(input) {
  let gallons = (input * (literToGallonConv)).toFixed(3)
  return gallons
}

function convertKilosToPounds(input) {
  let pounds = (input * (kiloToPoundConv)).toFixed(3)
  return pounds
}

function convertPoundsToKilos(input) {
  let kilos = (input * (poundToKiloConv)).toFixed(3)
  return kilos
}