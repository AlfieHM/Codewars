// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let score = 0
  let array =text.toLowerCase().split("")
  let arr1 = []
  let arr2=[]
  for(let i =0;i<array.length;i++){
    if(arr1.includes(array[i])){arr2.push(array[i]), arr1.push(array[i])}
  else{arr1.push(array[i])}
}
  arr2 = arr2.sort()
  for(let i=0;i<arr2.length;i++){
    if(arr2[i]!=arr2[i-1]){
      score++}
    }
    return score}
