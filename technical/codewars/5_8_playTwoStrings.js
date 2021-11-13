function workOnStrings(a, b) {
  let firstString = "";
  for (let i = 0; i < a.length; i++) {
    const count = countOccurences(a[i], b);

    if (isOdd(count)) {
      firstString += oppositeCase(a[i]);
    } else {
      firstString += a[i];
    }
  }

  let secondString = "";
  for (let i = 0; i < b.length; i++) {
    const count = countOccurences(b[i], a);

    if (isOdd(count)) {
      secondString += oppositeCase(b[i]);
    } else {
      secondString += b[i];
    }
  }

  return firstString + secondString;
}

// check if a char is uppercase or lowercase
function isUpperCase(char) {
  if (char === char.toUpperCase()) return true;
  else return false;
}

// turn lowercase to uppercase and vice versa
function oppositeCase(char) {
  if (isUpperCase(char)) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}

// count occurences of a char in a string
function countOccurences(char, string) {
  const regex = new RegExp(char, "gi");
  return (string.match(regex) || []).length;
}

// depending on the number of occurences, we want to turn it to lowercase or uppercase
function isOdd(occurences) {
  if (occurences % 2 === 0) return false;
  else return true;
}

console.log(workOnStrings("abc", "cde")); // abC
console.log(workOnStrings("ab", "aba")); // aB
console.log(workOnStrings("abab", "bababa"));
console.log(workOnStrings("abcdeFg", "defgG"));
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"));
