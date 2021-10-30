function moreThanOne(arr, char) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === char.toLowerCase()) {
      count++;
      if (count > 1) return true;
    }
  }
  return false;
}

function duplicateEncode(word) {
  return word
    .split("")
    .map((char, index) => {
      if (moreThanOne(word, char)) {
        return ")";
      }
      return "(";
    })
    .join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
