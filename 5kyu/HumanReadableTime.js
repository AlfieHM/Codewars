// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
  let hours = Math.floor(seconds/3600)
  let mins = Math.floor((seconds%3600)/60)
  let secs = seconds - (60*((60*hours)+mins))
  if(hours.toString().split('').length===1){
   hours = '0' + hours
 }
  if(mins.toString().split('').length===1){
   mins = '0' + mins
 }
  if(secs.toString().split('').length===1){
   secs = '0' + secs
 }
  return hours+':'+mins+':'+secs
}
