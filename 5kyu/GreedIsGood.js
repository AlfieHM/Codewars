// DESCRIPTION:
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

JavaScript:
function score( dice ) {
  let count1=dice.filter((x)=>x===1)
  let count2=dice.filter((x)=>x===2)
  let count3=dice.filter((x)=>x===3)
  let count4=dice.filter((x)=>x===4)
  let count5=dice.filter((x)=>x===5)
  let count6=dice.filter((x)=>x===6)
  let score = 0
  if(count1.length>=3){
    score=score+1000
  }
  if(count6.length>=3){
    score=score+600
  }
  if(count5.length>=3){
    score=score+500
  }
  if(count4.length>=3){
    score=score+400
  }
  if(count3.length>=3){
    score=score+300
  }
  if(count2.length>=3){
    score=score+200
  }
  let z = count1.length%3
  if(z!=0){
   score = score+(z*100) 
  }
  let y = count5.length%3
  if(y!=0){
   score = score+(y*50) 
  }
  return score
}
