// Description:
// Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments.

function roots(a,b,c){
  let ans = ((-b+Math.sqrt(b*b-4*(a*c)))/(2*a))+((-b-Math.sqrt(b*b-4*(a*c)))/(2*a))
  ans = Math.round(ans*100)/100
  if(ans||ans===0){
    return ans
  }
  else{
    return null
  }
}
