function twiceAsOld(dadYearsOld, sonYearsOld) {
  let i = 1;
  let tempDadAge = dadYearsOld - sonYearsOld + 1;
  while (true) {
    if (tempDadAge / i === 2) return Math.abs(dadYearsOld - tempDadAge);
    i++;
    tempDadAge++;
  }
}
console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); // 5
