function myDiamond(n) {
  let str = "";
  let middle = Math.floor(n / 2); // 5 / 2 = 2

  for (let i = 0; i < middle; i++) {
    let spaces = " ".repeat(middle - i);
    str += spaces + "*".repeat(i * 2 + 1) + "\n";
  }

  str += "*".repeat(n) + "\n";

  for (let i = middle + 1; i < n; i++) {
    // i = 2 + 1 = 3 / 3 < 5
    let spaces = " ".repeat(i - middle); // repeat (3 - 2) times
    str += spaces + "*".repeat(n - (i - middle) * 2) + "\n"; //repeat (5 - (3 - 2) * 2)
  }
  return str;
}

console.log(myDiamond(5));
