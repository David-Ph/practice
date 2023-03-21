function longestRepetition(s) {
  let previousChar = "";
  let longestChar = "";
  let currentReps = 0;
  let longestReps = 0;

  s.split("").forEach((c) => {
    if (c !== previousChar) {
      previousChar = c;
      currentReps = 1;
    } else {
      currentReps++;
    }

    if (currentReps > longestReps) {
      longestChar = c;
      longestReps = currentReps;
    }
  });

  return [longestChar, longestReps];
}

console.log(longestRepetition("aaaabb")); // ["a", 4]
console.log(longestRepetition("bbbaaabaaaa")); // ["a", 4]
console.log(longestRepetition("cbdeuuu900")); // ["u", 3]
console.log(longestRepetition("ba")); // ["b", 1];
