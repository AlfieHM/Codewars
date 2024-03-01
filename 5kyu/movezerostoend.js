//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let arr1 = arr.filter((number)=>number !== 0)
    for(let i=0;i<arr.length;i++){
      if(arr[i]===0){
        arr1.push(0)
      }
    }
    return arr1
  }
