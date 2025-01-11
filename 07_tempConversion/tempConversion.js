const convertToCelsius = function(temp) {
  let result = (temp - 32)/1.8;

  if(!Number.isInteger(result)){
    result = result.toFixed(1);

    return parseFloat(result)
  } else

  return result
  
};

const convertToFahrenheit = function(temp) {
  let result = (temp * 1.8)+32;

  if(!Number.isInteger(result)){
    result = result.toFixed(1);

    return parseFloat(result)
  } else

  return result

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
