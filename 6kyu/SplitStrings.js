// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let str1 = str.split('')
  let str2 = []
  let x = 0
  for(let i=0;i<str1.length/2;i++){
    if(typeof str1[x+1]!=='undefined'){
      str2.push(str1[x]+str1[x+1])
    }
    else{
      str2.push(str1[x]+'_')
    }
    x=x+2
  }
  return str2
