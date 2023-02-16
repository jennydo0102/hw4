function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  const temp1 = 32;
  const temp2 = 98.7;
  const temp3 = 212;
  
  console.log(`${temp1} degrees Fahrenheit = ${fahrenheitToCelsius(temp1)} degrees Celsius`);
  console.log(`Temperature of ${temp2} Fahrenheit is equivalent to ${fahrenheitToCelsius(temp2)} degrees Celsius`);
  console.log(`Water boiling temperate is ${temp3} Fahrenheit or ${fahrenheitToCelsius(temp3)} Celsius`); 