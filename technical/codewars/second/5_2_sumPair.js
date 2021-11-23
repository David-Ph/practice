function sumPairs(ints, s) {
  let start = 0;
  let end = start + 1;

  while (start < ints.length) {
    if (ints[start] + ints[end] === s) return [ints[start], ints[end]];

    if(end < ints.length){
        end++;
    }else{
        start++;
        end = start + 1;
    }
  }

  return undefined;
}

console.log(sumPairs([11, 3, 7, 5], 10));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));