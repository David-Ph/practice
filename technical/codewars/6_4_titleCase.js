function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
}

function titleCase(title, minorWords) {
  let newTitle = title.toLowerCase().split(" ");
  let minors = "";

  if (minorWords) {
    minors = minorWords.toLowerCase().split(" ");
  }

  newTitle = newTitle.map((word, index) => {
    switch (index) {
      case 0:
        return capitalizeFirstLetter(word);
        break;
      default:
        if (minors?.includes(word)) {
          return word;
        }
        return capitalizeFirstLetter(word);
        break;
    }
  });

  return newTitle.join(" ");
}

console.log(titleCase(""));
console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLING", "The In"));
console.log(titleCase("the quick brown fox"));
