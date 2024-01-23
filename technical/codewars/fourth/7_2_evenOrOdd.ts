function isEven(num: number): boolean {
  return num % 2 === 0;
}

function evenOrOdd(str: string) {
  const evenSum = str
    .split("")
    .filter((num) => {
      return isEven(Number(num)) ? true : false;
    })
    .reduce((a, b) => {
      return a + Number(b);
    }, 0);

  const oddSum = str
    .split("")
    .filter((num) => {
      return isEven(Number(num)) ? false : true;
    })
    .reduce((a, b) => {
      return a + Number(b);
    }, 0);

  if (evenSum === oddSum) {
    return "Even and Odd are the same";
  } else if (evenSum > oddSum) {
    return "Even is greater than Odd";
  } else {
    return "Odd is greater than Even";
  }
}

console.log(evenOrOdd("112"));
