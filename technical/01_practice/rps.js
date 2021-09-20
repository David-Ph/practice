const choices = ["rock", "paper", "scissor"];

function getOpponentPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(ourPlay, opponentPlay) {
  //   error check
  if (typeof ourPlay !== "string")
    return console.log("Please enter rock, paper, or scissor");
  if (!choices.includes(ourPlay))
    return console.log(`${ourPlay} is not part of the game`);

  // convert everything to toLowerCase
  ourplay = ourPlay.toLowerCase();
  opponentPlay = opponentPlay.toLowerCase();

  console.log(`Your play is ${ourPlay}`);
  console.log(`Opponent play is ${opponentPlay}`);

  if (ourPlay === opponentPlay) {
    return console.log("draw");
  } else if (
    (ourPlay === "rock" && opponentPlay === "scissor") ||
    (ourPlay === "scissor" && opponentPlay === "paper") ||
    (ourPlay === "paper" && opponentPlay === "rock")
  ) {
    return console.log(`You won!`);
  } else {
    return console.log(`You lose!`);
  }
}

// getWinner("helloo", getOpponentPlay());
// getWinner(123, getOpponentPlay());
getWinner("paper", getOpponentPlay());
