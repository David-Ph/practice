function periodIsLate(last, today, cycleLength) {
  const diffTime = today - last;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return cycleLength < diffDays;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
