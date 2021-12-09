function countWords(string, word) {
  const regex = new RegExp(word, "gi");
  return string.match(regex).length;
}

console.log(
  countWords("The quick brown fox jumps over over my brown dog", "over")
);
