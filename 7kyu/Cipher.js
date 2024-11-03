// Description:
// This cipher involves taking each character of a string and multiplying their char codes by 6.

// For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

// You must write two functions:
// `encode` to encode a given string,
// `decode` to decode a given string.

function encode(str) {
  let ans = [] 
  for(let i=0;i<str.length;i++){
    let val = str.charCodeAt(i)*6
    ans.push(String.fromCharCode(val))
  }
  return ans.join('')
}

function decode(str) {
   let ans = [] 
  for(let i=0;i<str.length;i++){
    let val = str.charCodeAt(i)/6
    ans.push(String.fromCharCode(val))
  }
  return ans.join('')
}
