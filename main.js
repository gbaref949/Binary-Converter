// let number1 = parseInt(prompt("Enter a decimal number"));
// prompts for a number

// let result1 = number1.toString(2);
// // converts number into a string in base 2

// let result2 = number1.toString(16);
// alert(`Binary: ${result1}
// Hexadecimal: ${result2} `);
// converts number into a string in base 16

function hexa(){
    let num = 546;
    let t = true;
    for(let i = 0; i<num; i++){
        num = Math.floor(num/16);
        console.log(num)
    }
}

hexa();