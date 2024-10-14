// Description:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
  let a = 0
  let b = 0
  let c = 0
  for(let i=0;i<5;i++){
    if(array[i]==='a'){
      a++
    }
    else if(array[i]==='b'){
      b++
    }
    else if(array[i]==='c'){
      c++
    }
  }
  let arr = [a,b,c]
  return arr.includes(2)&&arr.includes(3)
}
