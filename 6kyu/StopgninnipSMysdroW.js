// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  let array = string.split(' ')
  for(let i=0;i<array.length;i++){
    if(array[i].split('').length>4){
      array[i]=array[i].split('').reverse().join('')
    }
  }
  return array.join(" ")
}
