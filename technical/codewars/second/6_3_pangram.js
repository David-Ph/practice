const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isPangram(string) {
  for (let i = 0; i < alphabets.length; i++) {
    if (!string.toLowerCase().includes(alphabets[i])) {
      return false;
    }
  }

  return true;

  //   return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
