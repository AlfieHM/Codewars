// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let val = weight/(height*height)
  if (val<=18.5){
    return "Underweight"
  }
  else if (val<=25){
    return "Normal"
  }
  else if (val<=30){
    return "Overweight"
  }
  else{
    return "Obese"
  }
}
