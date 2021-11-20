function abbreviate(string) {
  let array = string.split(" ");
  array = array
    .map((word) => {
      if (word.length >= 4) {
        if (!word.match(/^[a-zA-Z0-9- ]*$/i) && word.length === 4) {
          return word;
        }
        word = word.split("-");
        word = word
          .map((newWord) => {
            if (!newWord.match(/^[a-zA-Z0-9- ]*$/i)) {
              return `${newWord[0]}${newWord.length - 3}${
                newWord[newWord.length - 2]
              }${newWord[newWord.length - 1]}`;
            }
            return `${newWord[0]}${newWord.length - 2}${
              newWord[newWord.length - 1]
            }`;
          })
          .join("-");
      }
      return word;
    })
    .join(" ");
  return array;
}

console.log(abbreviate("internationalization"));
console.log(abbreviate("accessibility"));
console.log(abbreviate("Accessibility"));
console.log(abbreviate("elephant-rides are really fun!"));
console.log(
  abbreviate("You need, need not want, to complete this code-wars mission")
);
