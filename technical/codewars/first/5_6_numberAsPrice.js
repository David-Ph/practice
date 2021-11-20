var numberToPrice = function (number) {
  if (isNaN(number)) {
    return "NaN";
  }

  // split the number into array
  let data = number.toString().split("");

  // get necessary data
  let dotIndex = data.length - 1;
  let numberBehindDot = 0;

  // find how many numbers are behind the dot
  //   and get dot index
  for (let i = 0; i < data.length; i++) {
    if (data[i] === ".") {
      numberBehindDot = data.length - i - 1;
    }
    dotIndex = data.length - 1 - numberBehindDot;
  }

  while(numberBehindDot > 2){
    data.pop();
    numberBehindDot--;
  }

  while (numberBehindDot < 2) {
    if (numberBehindDot === 0) {
      data.push(".");
    }
    data.push("0");
    numberBehindDot++;
  }

  //   insert dot for every 3 numbers
  let j = 3;
  for (let i = dotIndex; i >= 0; i--) {
    if (i > 0) {
      if (j === 0) {
        if (data[i - 1] !== "-") {
          j = 3;
          data.splice(i, 0, ",");
        }
      }
    }
    j--;
  }

  return data.join("");
};
// console.log(numberToPrice(1500.129));
// console.log(numberToPrice(-5));
// console.log(numberToPrice(1000000.5));
// console.log(numberToPrice("@"));
// console.log(numberToPrice(-200000.1));
// console.log(numberToPrice(-300.1));
console.log(numberToPrice(245123215));