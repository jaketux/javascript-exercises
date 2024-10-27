const convertToCelsius = function(temperature) {
  let celsiusTemperature=((temperature - 32)/(9/5))
  let roundedCelsius = Math.round(celsiusTemperature*10)/10;
  return roundedCelsius  
};

const convertToFahrenheit = function(temperature) {
  let fahrenheitTemperature=(temperature*(9/5)+32)
  let roundedFahrenheit = Math.round(fahrenheitTemperature*10)/10;
  return roundedFahrenheit  
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
