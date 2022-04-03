const charCount = (string) => {
  if (typeof string !== "string") return "Not a string";

  return string.split("").reduce((res, char) => {
    if (!res[char]) {
      res[char] = 0;
    }

    res[char]++;
    return res;
  }, {});
};

console.log(charCount("aaaa")); // {a: 4}
console.log(charCount("aabb")); // {a: 2, b: 2}
console.log(charCount("cccddd")); // {c: 3, b: 3}
console.log(charCount([1, 2, 3])) // not a string
console.log(charCount(123123)); // not a string
