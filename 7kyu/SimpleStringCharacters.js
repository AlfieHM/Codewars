// Description:
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

function solve(s){
 let upper = 0
 let lower = 0
 let num = 0
 let arr = s.split('')
 for(let i=0;i<arr.length;i++){
   if(/[A-Z]/.test(arr[i])){
     upper++
   }
   if(/[a-z]/.test(arr[i])){
     lower ++
   }
   if(/[0-9]/.test(arr[i])){
     num ++
   }
 }
  return [upper, lower, num, arr.length-upper-lower-num]
}
