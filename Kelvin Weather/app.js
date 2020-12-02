// created a variable that will remain constant for the actual temperature in kelvins;
const kelvin = 293;

// since the difference between celsius and kelvins are 273, we subtract the amount into a celsius variable
let celsius = kelvin - 273;

// The equation to calculate the Fahrenheit is Celsius*(9/5)+32. We need a changeable variable because we need to round up the result;
let fahrenheit = celsius*(9/5) + 32;

//The result of the convertion from Fahrenheit to celsius will often be a decimal number. .floor() method will round the number and we need it saved to the fahrenheit variable;
fahrenheit = Math.floor(fahrenheit);

// Convert the celsius to the Newton scale
let newton = celsius*(33/100);

// The result of the convertion from celsius to Newton scale often results in decimals. Therefore we need to round those numbers and save to the newton variable;
newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);