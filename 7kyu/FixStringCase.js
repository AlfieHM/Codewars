// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  let arr1 = s.split('')  
  let upper = arr1.filter((x)=>x===x.toUpperCase()).length
    if(upper>s.length/2){
      return arr1.map((x)=>x.toUpperCase()).join('')
    }
  else{
    return arr1.map((x)=>x.toLowerCase()).join('')
  }
}
