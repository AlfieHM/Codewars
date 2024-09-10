// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  x = x.toLowerCase().split('')
  let xr = x
  x = x.join('')
  xr = xr.reverse().join('')
  return x === xr
}
