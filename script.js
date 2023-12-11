function convert() {
  const number = parseInt(prompt('Enter a decimal number')); // prompts for a number
  let firstResult = number.toString(2); //converts number into a string in base 2
  let secondResult = number.toString(16); //converts number into a string in base 16
  document.getElementById(
    //access text through the html and add binary and hex
    'text'
  ).innerHTML = `Binary: ${firstResult} <br> Hexadecimal: ${secondResult} `;
}