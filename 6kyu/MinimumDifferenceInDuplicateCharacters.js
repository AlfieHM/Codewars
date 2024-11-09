// Description:
// Task
// Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters, and the character itself.

// For example, in the string "aabcba", the minimum position difference of repeated characters will be equal to 1, since for the character a, the position difference is 1.

// The output should be in the form of an array.

// If there are no duplicate characters in the string, it should return null.

// The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).

// If the difference between repeated characters is the same, return the first minimal difference encountered.

// Examples of outputs:

// "aa" => new Object[]{1, 'a'}

// "aabbca" => new Object[]{1, 'a'}

// "abka" => new Object[]{3, 'a'}

// "abcded" => new Object[]{2, 'd'}

// "abbbbbc" => new Object[]{1, 'b'}

// "abc" => null

function minRepeatingCharacterDifference(text) {
    let obj = {}
    for(let i=0;i<text.length;i++){
      if(obj[text[i]]){
        obj[text[i]].push(i)
      }
      else{
        obj[text[i]]=[i]
      }
    }
  let char = ''
  let val = text.length
  let Ind = text.length
  for(const key in obj){
    for(let i=1;i<obj[key].length;i++){
      if(obj[key][i]-obj[key][i-1]<val){
        val = obj[key][i]-obj[key][i-1]
        char = key
        Ind = obj[key][i]
      }
      if(obj[key][i]-obj[key][i-1]==val&&obj[key][i]<Ind){
        val = obj[key][i]-obj[key][i-1]
        char = key
        Ind = obj[key][i]
      }
    }
  }
  if(val == text.length){
    return null
  }
  else{
    return [val, char]
    }
}
