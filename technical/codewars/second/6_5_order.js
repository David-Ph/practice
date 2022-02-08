function order(words) {
  const map = words.split(" ").map((word) => {
    return {
      word,
      number: word.match(/\d/)[0],
    };
  });

  const ordered = map.sort((a, b) => {
    return a.number - b.number;
  });

  const newArr = ordered.map((ordered) => {
    return ordered.word;
  });

  return newArr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
