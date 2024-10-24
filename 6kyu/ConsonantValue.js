// Description:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26
// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "di" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57
// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let arr1 = []
  let vowels = ['a','e','i','o','u']
  for(let i=0;i<s.length;i++){
    if(!vowels.includes(s[i])){
      arr1.push(s[i])
    }
    else{
      arr1.push(',')
    }
  }
  arr1 = arr1.join('').split(',').filter((x)=>x!=='')
  let max=0
  for(let i=0;i<arr1.length;i++){
    let score = arr1[i].split('').reduce((acc,c)=>acc+alph.indexOf(c)+1,0)
    if(score>max){
      max = score
    }
  }
  return max
};
