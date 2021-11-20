const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  return begin + sequenceSum(begin + step, end, step);
};

console.log(sequenceSum(2, 6, 2)); //, 12);
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5

function replicate(times, number) {
  if (times <= 0) return [];

  return [number, ...replicate(times - 1, number)];
}

console.log(replicate(3, 5));
