let d = b;
// let c = a;

// let a = 1;
var b = 2;

// console.log(c);
console.log(d);

let variable = 5;
variable = 10;

if (5 > 1) {
  var isBad = true;
  let isGood = false;
}

console.log(isBad); // true
console.log(isGood); // error

// arrow function vs function

function addFunction(a, b) {
  return a + b;
}

const addArrow = (a, b) => a * b;
