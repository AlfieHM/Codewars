// Description:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
 let arr1 = string.split('')
  let vowels = ['a','e','i','o','u']
  for(let i=0;i<string.length;i++){
    if(vowels.includes(string[i])){
      arr1.splice(i,1,vowels.indexOf(string[i])+1)
    }
  }
  return arr1.join('')
}

function decode(string) {
 let arr2 = string.split('')
  const vowObj = {
    1 : 'a',
    2 : 'e',
    3: 'i',
    4 : 'o',
    5 : 'u'
  }
  for(let i=0;i<string.length;i++){
    if(string[i] in vowObj){
      arr2.splice(i,1,vowObj[string[i]])
    }
  }
  return arr2.join('')
}
