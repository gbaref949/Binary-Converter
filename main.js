function binary(){
    let num = 1025;
    let remainder;
    if(num%2 == 1){
        remainder = 1;
        num = num - 1
    }
    let list = [];
    let n = -1;
    for(let i = 0; i<12; i++){
     n = n + 1;
     let div = 1*(2**n);
     if(num/div == 1){
        console.log(div);
        console.log(remainder);
     }
 }
}

binary();