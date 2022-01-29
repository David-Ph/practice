function isTriangle(a, b, c) {
  const ac = a + c > b;
  const ab = a + b > c;
  const bc = b + c > a;

  return ac && ab && bc;
}

console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(1, 2, 2)); // true
