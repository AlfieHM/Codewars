// DESCRIPTION:
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

function digPow(n, p){
  let array = []
  let num = n.toString().split('')
  num = num.map((x)=>Number(x))
  for(let i=0;i<num.length;i++){
    array.push(num[i]**(p+i))
  }
  let value = array.reduce((acc,c)=>acc+c,0)
  let ans = value/n
  if (Number.isInteger(ans)){
    return ans
  }
  else{
    return -1
  }
}
