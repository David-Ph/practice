const words = [
  "Satu",
  "Sate",
  "Tujuh",
  "Tusuk",
  "Tujuh",
  "Sate",
  "Bonus",
  "Tiga",
  "Puluh",
  "Tujuh",
  "Tusuk",
];

function checkRepeat(array) {
  const repeat = [];
  const index = [];
  let word;

  // look for word with duplicate, push the word and the range
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        repeat.push({
          word: array[i],
          range: j - i,
        });
      }
    }
  }

  // look for word with the closest range
  word = repeat[0];
  for (let i = 0; i < repeat.length; i++) {
    if (repeat[i].range < word.range) {
      word = repeat[i];
    }
  }

  // check the array and get the index
  // of words that matches one we got
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word.word) {
      index.push(i + 1);
    }
  }

  return index;
}

console.log(checkRepeat(words));
