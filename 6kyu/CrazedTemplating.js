// Your crazy uncle has found a new hobby - he will occasionally scream out random words of the same length. Since he was a renowned Computer Scientist, you think he must have some pattern to this craziness. The words seem to always have a few letters in the same place, so maybe if you find his pattern his new amusement will stop annoying you.

// Create a function that takes a list of words, all as equal length strings, and returns a new string (of the same word length). This string should keep the letters that occur at the same index across all the words, but place an asterisk (*) at indices where the words mismatch.

// Examples
// ["war", "rad", "dad"]
// Result: "*a*" (only the second letter is shared).
// ["general", "admiral", "piglets", "secrets"]
// Result: "*******" (no shared letters).
// ["family"]
// Result: "family" (only one word, so all letters are shared by definition).
// Assumptions
// All words are composed entirely of lowercase letters.
// All words have the same length, and are never empty.
// There will always be at least one word in the list.

function letterPattern(words) {
  let ans = []
  for(let i=0;i<words[0].length;i++){
    let arr1 = words.map((x)=>x[i])
    if(arr1.every(val => val === arr1[0])){
      ans.push(arr1[0])
    }
    else{
      ans.push('*')
    }
  }
  return ans.join('')
}
