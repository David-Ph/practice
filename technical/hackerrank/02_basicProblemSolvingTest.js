function findSubstring(s, k) {
  if (!s.match(/a|i|u|e|o/)) return "Not found!";

  let currentLongest = {
    string: "",
    vowelsCount: 0,
  };
  for (let i = 0; i <= s.length - k; i++) {
    let newString = s.substring(i, i + k);
    let vowelsCount = newString.match(/a|i|u|e|o/g)?.length || 0;

    if (vowelsCount > currentLongest.vowelsCount) {
      currentLongest = {
        string: newString,
        vowelsCount: vowelsCount,
      };
    }
  }

  return currentLongest.string;
}

// console.log(findSubstring("azerdii", 5));
// console.log(findSubstring("azerdiiqwqwqwqwqw", 5));
