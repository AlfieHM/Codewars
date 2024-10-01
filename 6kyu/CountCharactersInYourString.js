// Description:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let result = {}
  let arr = string.split('')
  for(let i=0;i<arr.length;i++){
    if(result[string[i]]){
      result[string[i]] ++
    } 
    else{
      result[string[i]] = 1
    }
  }
  return result;
}
