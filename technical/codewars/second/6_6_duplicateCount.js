function duplicateCount(text) {
  const duplicates = {};

  text.split('').forEach((char) => {
    const regex = new RegExp(char, "ig");
    if (text.match(regex).length > 1) {
      if (!duplicates[char.toLowerCase()]) {
        duplicates[char.toLowerCase()] = 1;
      }
    }
  });

//   return Object.keys(duplicates).length;
  return duplicates;
}

// console.log(duplicateCount(""));
// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabb"));
console.log(duplicateCount("aabBcde"));
// console.log(duplicateCount("aabbccde"));

// const char = "b";
// const regex = new RegExp(char, "gi");
// const string = "abbcde";
// console.log(string.match(regex));
