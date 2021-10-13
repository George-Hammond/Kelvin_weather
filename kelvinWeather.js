//Value of kelvin is initiated to constant.
const kelvin= 293;
//Kelvin converted to celsius and value stored in celsius
let celsius = kelvin - 273;
//Celsius converted to fahrenheit and rounded off
let fahrenheit;
fahrenheit= Math.floor((celsius*(9/5))+32);
//Result displayed on console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
