function bmi(weight, height) {
  const result = weight / (height * height);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
