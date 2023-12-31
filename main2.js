// Rock, Paper, Scissors: Refactored with while Loop and an Array
let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper, scissors");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie Game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
        alert(result);
        playGame = confirm("Play again?");
        if (!playGame) alert("Thanks for playing!");
        continue;
      } else {
        alert("You didn't enter rock, paper or scissors.");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  }
} else {
  alert("Okay, maybe next time.");
}
