function XO(str) {
  const count = {};

  str.split("").forEach((char) => {
    count[char.toLowerCase()]
      ? count[char.toLowerCase()]++
      : (count[char.toLowerCase()] = 1);
  });

  return count.x === count.o;
}

console.log(XO("xo")); // true
console.log(XO("xxoo")); // true
console.log(XO("xoxO")); // true
console.log(XO("xoo")); // false
console.log(XO("xooxx")); // false
