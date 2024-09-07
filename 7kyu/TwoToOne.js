// Description:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  s1 = s1.split('')
  s2 = s2.split('')
  let s3 = []
  for(let i=0;i<26;i++){
    if(s1.includes(alphabet[i])||s2.includes(alphabet[i])){
      s3.push(alphabet[i])
    }
  }
  return s3.join('')
}
