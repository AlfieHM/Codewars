// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array){
  let alphabet ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let ans = []
  let k=0
  for(let i=alphabet.indexOf(array[0]);i<alphabet.length;i++){
    if(alphabet[i]!==array[k]){
      return alphabet[i]
    }
    k++
  }
}
