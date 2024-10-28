// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
  let arr1 = word.toLowerCase().split('')
  let letters = {}
  for(let char of arr1){
    if(char in  letters){
      letters[char]++
    }
    else{
      letters[char]=1
    }
  }
  let ans = []
  for(let i=0;i<arr1.length;i++){
    if(letters[arr1[i]]>1){
      ans.push(')')
    }
    else{
      ans.push('(')
    }
  }
  return ans.join('')
}
