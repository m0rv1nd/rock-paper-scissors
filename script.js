const rounds = +prompt("How many rounds?");
if (rounds == 0) {
   window.location.reload();
}

const buttons = document.querySelectorAll("button");
const divBtn = document.querySelector("#buttons");
const humanPara = document.querySelector("#human");
const computerPara = document.querySelector("#computer");
const roundResult = document.querySelector("#round-result");
const roundScore = document.querySelector("#round-score");
let humanScore = 0;
let computerScore = 0;
let humanSelection; 
let computerSelection;
let counter = 0;

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
      counter++;
      if (counter < rounds) {
         playRound(humanSelection, computerSelection);
      } else {
         winnerDisplay(humanScore, computerScore);
      }   
   });
});

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

function winnerDisplay(humanResult, computerResult) {
   humanPara.remove();
   computerPara.remove();
   roundResult.remove();
   divBtn.remove();
   const winner = document.createElement("p");
    
   if (humanResult > computerResult) {
      winner.textContent = "You win! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Congratulations! Maybe you can try again?";
   } else if (humanResult == computerResult) {
      winner.textContent = "It's a draw! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Maybe you can try again?";
   } else {
      winner.textContent = "You loose! Your score is: " + humanResult + " Computer Score is: " + computerResult + ". " + "Maybe you can try again?";
   }
   document.body.appendChild(winner);
} 
