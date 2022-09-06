
function convert(){

let number1 = parseInt(prompt("Enter a decimal number"));
// prompts for a number

let result1 = number1.toString(2);
// converts number into a string in base 2

let result2 = number1.toString(16);

document.getElementById('text').innerHTML = (`Binary: ${result1} <br>
Hexadecimal: ${result2} `);
// converts number into a string in base 16

// This is a test
}
