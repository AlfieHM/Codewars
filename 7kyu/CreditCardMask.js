// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.


function maskify(cc) {
  let array = cc.split('')
  let array1=[]
  for(let i=array.length-4;i<array.length;i++){
    array1.push(array[i])
  }
  for(let i=0;i<array.length-4;i++){
    array1.unshift('#')
  }  
  return array1.join('')
}
