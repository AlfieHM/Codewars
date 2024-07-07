// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let arr = str.split('')
  let arr1 = []
  for(let i=0; i<arr.length; i++){
    let val = arr[i]
    let count=0
      for(let y=0; y<arr.length; y++){
       if(val===arr[y]){
        count++
       }
      }
      if(count>1){
        arr1.push(arr[i])
      }
  }
  return arr1.join('')
}
