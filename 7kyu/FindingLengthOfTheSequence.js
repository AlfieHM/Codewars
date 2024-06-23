// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

var lengthOfSequence = function (arr, n) {
  let count = 0
  let a = arr.indexOf(n)
  let b = arr.lastIndexOf(n)
  for(let i=0;i<arr.length;i++){
    if(arr[i]===n){
      count++
    }
  }
  if(count>2){
    return 0
  }
  else if(arr.includes(n)&& a!==b){
    return b-a+1
  }
  else{
    return 0
  }
  
};
