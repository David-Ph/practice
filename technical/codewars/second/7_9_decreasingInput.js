function add(...args) {
  return Math.round(args.reduce((a, b, i) => a + b / (i + 1), 0));
  // return args.reduce((a, b, i) => a + Math.round(b / (i + 1)), 0);
}

console.log(add()) // 0
console.log(add(100, 200, 300)) // 300
console.log(add(4, -3, -2)) // 2
console.log(add(-70,-351,139,291,412,-424,-20,219,409,-440,-58,76,-95,34,164,115,126,-451,-152)) // -100