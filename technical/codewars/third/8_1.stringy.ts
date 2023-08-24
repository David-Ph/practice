function stringy(size: number): string {
  return Array(size)
    .fill(0)
    .reduce((acc, _, index) => {
      if (index % 2 === 0) {
        return (acc += "1");
      } else {
        return (acc += "0");
      }
    }, "");
}

console.log(stringy(12));
