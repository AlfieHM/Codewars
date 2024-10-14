// Description:
// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

// Example:

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// Tips: Order of other numbers should not change.

function move_zeros(arrNum, isRight){
  let count=0
  let arr1 = []
  if(isRight===false){
    for(let i=0;i<arrNum.length;i++){
      if(arrNum[i]!==0){
        arr1.push(arrNum[i])
      }
      else{
        count++
      }
    }
    for(let i=0;i<count;i++){
      arr1.unshift(0)
    }
    return arr1
  }
   else{
    for(let i=0;i<arrNum.length;i++){
      if(arrNum[i]!==0){
        arr1.push(arrNum[i])
      }
      else{
        count++
      }
    }
    for(let i=0;i<count;i++){
      arr1.push(0)
    }
    return arr1
  }
}
