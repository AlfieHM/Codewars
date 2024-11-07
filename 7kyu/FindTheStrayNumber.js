// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let map = {}
  for(let i=0;i<numbers.length;i++){
    if(map[numbers[i]]){
      map[numbers[i]]++
    }
    else{
      map[numbers[i]]=1
    }
  }
  for(const key in map){
    if(map[key]===1){
      return Number(key)
    }
  }
}
