const rounds = +prompt("How many rounds?");
const buttons = document.querySelectorAll("button");
const humanPara = document.querySelector("#human");
const computerPara = document.querySelector("#computer");
const roundResult = document.querySelector("#round-result");
const roundScore = document.querySelector("#round-score");
let humanScore = 0;
let computerScore = 0;
let humanSelection; 
let computerSelection;

function getComputerChoice() { 
   let randomNumber = Math.floor(Math.random() * 3);
      switch(randomNumber) {
         case 0:
            return "rock";
            break;
         case 1:
            return "paper";
            break;
         default:
            return "scissors";  
         }
   }

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      humanSelection = button.textContent;
      computerSelection = getComputerChoice();
      humanPara.textContent = "Human choice: " + humanSelection;
      computerPara.textContent = "Computer choice: " + computerSelection;
      playGame(rounds)
   });
});

 function playGame() {
   
   function playRound(humanChoice, computerChoice) {
      if(humanChoice === "rock" && computerChoice === "rock") {
         roundResult.textContent = "It's draw!";
      } else if(humanChoice === "rock" && computerChoice === "scissors") {
         roundResult.textContent = "You win! Rock beats scissors.";
         humanScore++;
      } else if(humanChoice === "rock" && computerChoice === "paper") {
         roundResult.textContent = "You lose! Paper beats rock.";
         computerScore++;
      } else if(humanChoice === "paper" && computerChoice === "paper") {
         roundResult.textContent = "It's draw!";
      } else if(humanChoice === "paper" && computerChoice === "rock") {
         roundResult.textContent = "You win! Paper beats rock.";
         humanScore++;
      } else if(humanChoice === "paper" && computerChoice === "scissors") {
         roundResult.textContent = "You lose! Scissors beats paper.";
         computerScore++;
      } else if(humanChoice === "scissors" && computerChoice === "scissors") {
         roundResult.textContent = "It's draw!";
      } else if(humanChoice === "scissors" && computerChoice === "paper") {
         roundResult.textContent = "You win! Scissors beats paper.";
         humanScore++;
      } else {
         roundResult.textContent = "You lose! Rock beats scissors.";
         computerScore++;
      }
      roundScore.textContent = "Human Score is: " + humanScore + " " + 
         "Computer Score is: " + computerScore; 
   }
      playRound(humanSelection, computerSelection);  
} 

/* function winnerDisplay(humanResult, computerResult) {
   if (humanResult > computerResult) {
      return "You win! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Congratulations! Maybe you can try again?";
   } else if (humanResult == computerResult) {
      return "It's a draw! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Maybe you can try again?";
   } else {
      return "You loose! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Maybe you can try again?";
   }
}  */

      /*   for (i = 0; i < roundsNumber; i++) {
         if(i == roundsNumber) {
            console.log("DONE");
         }
      } */

