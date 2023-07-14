const breakChocolate = (n, m) => {
  const result = n * m - 1;
  return result < 0 ? 0 : result;
};

console.log(breakChocolate(5, 5));
console.log(breakChocolate(1, 1));
console.log(breakChocolate(0, 0));
console.log(breakChocolate(2, 1));
