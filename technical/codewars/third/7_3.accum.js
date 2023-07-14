function accum(string) {
  const str = [];

  string.split("").forEach((char, i) => {
    let s = char.repeat(i + 1).toLowerCase();
    str.push(s[0].toUpperCase() + s.slice(1));
  });

  return str.join("-");
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
