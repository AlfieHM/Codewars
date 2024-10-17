// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

const isConsecutive = (str) => {
  let test = []
  for(let i=0;i<str.length;i++){
    if(test.includes(str[i])&&str[i]!==str[i-1]){
      return false
    }
    test.push(str[i])
  }
  return true
}
