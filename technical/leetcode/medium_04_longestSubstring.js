// var lengthOfLongestSubstring = function (s) {
//   if (s.length === 1) return 1;
//   const passedString = [];
//   let currentLongest = 0;
//   let counter = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (passedString.includes(s[i])) {
//       passedString.splice(0, passedString.length);
//       if (counter > currentLongest) {
//         currentLongest = counter;
//       }
//       counter = 1;
//     } else {
//       counter++;
//     }
//     passedString.push(s[i]);
//   }

//   if (currentLongest < counter) {
//     return counter;
//   } else {
//     return currentLongest;
//   }
// };

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;

  let currentLongest = 1;
  for (let i = 0; i < s.length; i++) {
    const string = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      if (string.includes(s[j])) {
        break;
      }

      string.push(s[j]);

      if (currentLongest < string.length) {
        currentLongest = string.length;
      }
    }
  }
  return currentLongest;
};

console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("au")); // 2
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3
