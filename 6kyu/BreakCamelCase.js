// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

JavaScript:
function solution(string) {
  string = string.split('')
  let ans = []
  let num = 0
  for(let i=0;i<string.length;i++){
    if(string[i]===string[i].toUpperCase()){
      ans.push(" ")
    }
    ans.push(string[i])
  }
  return ans.join('')
}
