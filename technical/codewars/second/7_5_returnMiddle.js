function getMiddle(s) {
  if (s.length % 2 === 0)
    return `${s[Math.floor(s.length / 2) - 1]}${s[Math.floor(s.length / 2)]}`;

  return s[Math.floor(s.length / 2)];
}

console.log(getMiddle("middle")); // dd
console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
