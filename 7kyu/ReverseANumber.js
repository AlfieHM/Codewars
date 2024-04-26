// DESCRIPTION:
// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
  let arr = n.toString().split('')
  if(arr[0]!=='-'){
    arr = arr.reverse().join('')
  }
  else{
    arr.shift()
    arr=arr.reverse()
    arr.unshift('-')
    arr=arr.join('')
  }
  return Number(arr)
}
