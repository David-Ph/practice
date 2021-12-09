function coinFlip(input) {
  const coins = [
    { side: "heads", count: 0 },
    { side: "tails", count: 0 },
  ];

  for (let i = 0; i < input; i++) {
    const randomize = Math.round(Math.random());
    coins[randomize].count++;
  }
  return coins;
}

console.log(coinFlip(10));
