// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
  let chars = {}
  for(let i=0;i<str.length;i++){
    if(!chars[str[i]]){
      chars[str[i]]=1
  }
    else{
      return false
    }
  }
  return true
}
