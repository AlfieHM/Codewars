// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
 let test = str.split('')
 let count = 0
 for(let i = 0;i<test.length;i++){if(test[i]==='a'||test[i]==='e'||test[i]==='i'||test[i]==='o'||test[i]==='u'){
   count++}
 }
return count
}
