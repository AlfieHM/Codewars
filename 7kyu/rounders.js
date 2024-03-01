// Task
// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

// Example
// For value = 15, the output should be 20

// For value = 1234, the output should be 1000.

// 1234 -> 1230 -> 1200 -> 1000.

// For value = 1445, the output should be 2000.

// 1445 -> 1450 -> 1500 -> 2000.

function rounders(value) {
    let rev1 = value.toString().split('').map(Number).reverse();
    for(let i=0; i<rev1.length-1;i++){
      if(rev1[i]<5){rev1[i]=0}
      else if(rev1[i]>4){rev1[i]=0, rev1[i+1]=rev1[i+1]+1}}  
    return Number(rev1.reverse().join(''))}
