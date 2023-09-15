function stringSuffix(s: string): number {
  const similarities: number[] = [];
  const suffixes: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const suffix = s.substring(i);
    suffixes.push(suffix);
  }

  suffixes.forEach((el) => {
    for (let i = el.length; i > 0; i--) {
      const subSuffix = el.substring(0, i);

      if (subSuffix === s.substring(0, subSuffix.length)) {
        similarities.push(subSuffix.length);
        break;
      }
    }
  });

  return similarities.reduce((a, b) => a + b, 0);
}

console.log(stringSuffix("ababaa")); // 11
console.log(stringSuffix("abc")); // 3
