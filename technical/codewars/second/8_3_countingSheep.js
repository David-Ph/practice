function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((prev, current) => {
    if (current) {
      return prev + 1;
    }
    return prev;
  }, 0);
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
