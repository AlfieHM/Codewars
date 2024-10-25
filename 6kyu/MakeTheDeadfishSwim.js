// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

// i: Increment the value
// d: Decrement the value
// s: Square the value
// o: Output the value to a result array
// All other instructions are no-ops and have no effect.

// Examples
// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

function parse( data ){
   let ans = []
   let val =0
   for(let i=0;i<data.length;i++){
     if(data[i]==='i'){
       val++
     }
     else if(data[i]==='s'){
       val=val*val
     }
   else if(data[i]==='d'){
       val--
     }
    else if(data[i]==='o'){
      ans.push(val)
    }
   }
  return ans
}
