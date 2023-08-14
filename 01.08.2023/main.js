// Task

// Rock Paper Scissors

// Psudo code
//
// I will need to check conditions of each palyer's choice and compare them to eachother and then log the outcome. I can do that with an if statement

// ternary conditional as I was trying to minimizing the code and improviong readability

const rps = (p1, p2) =>
  p1 === p2
    ? "Draw!"
    : `Player ${
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
          ? 1
          : 2
      } won!`;

// normal if statement
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";

  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};

// Test sample
//
console.log(rps("rock", "scissors")); // Output: "Player 1 won!"
console.log(rps("scissors", "paper")); // Output: "Player 1 won!"
console.log(rps("paper", "rock")); // Output: "Player 1 won!"
console.log(rps("scissors", "rock")); // Output: "Player 2 won!"
console.log(rps("paper", "scissors")); // Output: "Player 2 won!"
console.log(rps("rock", "paper")); // Output: "Player 2 won!"
console.log(rps("rock", "rock")); // Output: "Draw!"
console.log(rps("scissors", "scissors")); // Output: "Draw!"
console.log(rps("paper", "paper")); // Output: "Draw!"
