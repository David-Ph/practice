// const results = [
//   { rock: "rock", scissor: "scissor" },
//   { paper: "paper", b: "rock" },
//   { a: "scissor", b: "paper" },
// ];

const results = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

const getWinner = (user, computer) => {
  let winner = "";

  results[user] === computer ? (winner = "user") : (winner = "computer");

  return winner;
};

console.log(getWinner("rock", "scissor"));
