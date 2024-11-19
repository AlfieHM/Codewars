// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let arr1 = str.split(' ')
  for(let i=0;i<arr1.length;i++){
    arr1[i] = arr1[i].split('').reverse().join('')
  }
  return arr1.join(' ')
}
