/*
   PLAN
 
1. Create a function called getComputerChoice, which returns a string rock or paper or scissors.
   Use Math.floor(Math.random() * 3); for this purpose.
2. Create a getHumanChoice function that takes a string from the user using the prompt method and returns rock or paper or scissors. 
   The function should return the correct value regardless of the case of letters entered by the user. Use toLowerCase method.   
3. Create humanScore and computerScore variables to store the scores. 
   The variables should be created in the global scope and their initial value equal to 0.        
4. Single round.
   Create a function playRound, which takes as parameter the user's choice and the computer's choice. 
   Then a single round is played, the variable corresponding to the winner of the round is incremented and a message is displayed (using console.log) who won the round. Consider using the conditional statement if... else for a total of 9 cases (for each user choice 3 possible choices of the computer).    
5. Whole game.
   Create a playGame function to play a full game consisting of 5 rounds. Move the playRound function to playGame. 
   Play 5 rounds, after which the winner should be displayed using console.log. You can call the playRound function 5 times using the for loop.
*/

// PSEUDOCODE

// CREATE a function getComputerChoice
   // CREATE variable randomNumber
   // SET it as a randomNumber in the range 0 - 2. 
   // IF a randomNumber is equal to 0 THEN
      // RETURN string "rock"
   // ELSE IF a randomNumber is equal to 1 THEN
      // RETURN string "paper"
   // ELSE IF a randomNumber is equal to 2 THEN
      // RETURN string "scissors"
      // ENDIF
// END
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
// CREATE a function getHumanChoice
   // CREATE variable userInput
   // SET it as a GET input from user
   // INPUT from user should be case-insensitive
// END
function getHumanChoice() {
   let userInput = prompt("Enter rock, paper or scissors!");
   let formattedText = userInput.toLowerCase();
   return formattedText; 
}
// CREATE humanScore and ComputerScore variables
// SET them to 0 
// END
// let humanScore = 0;
// let computerScore = 0;
//  
// CREATE a function playRound that takes two parameters: humanChoice and computerChoice.
   // IF a humanChoice is equal to "rock" and computerChoice is equal to "rock" THEN
      // PRINT "It's a draw!"
   // ELSE IF a humanChoice is equal to "rock" and computerChoice is equal to "scissors" THEN
      // PRINT "You win! Rock beats scissors."
      // INCREMENT humanScore
   // ELSE a humanChoice is equal to "rock" and computerChoice is equal to "paper" THEN
      // PRINT "You lose! Paper beats rock."
      // INCREMENT computerScore
      // List the other six cases.
      //ENDIF
//END
/*
function playRound(humanChoice, computerChoice) {
   if(humanChoice === "rock" && computerChoice === "rock") {
      console.log("It's draw!");
   } else if(humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors.");
      humanScore++;
   } else if(humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock.");
      computerScore++;
   } else if(humanChoice === "paper" && computerChoice === "paper") {
      console.log("It's draw!");
   } else if(humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock.");
      humanScore++;
   } else if(humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper.");
      computerScore++;
   } else if(humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("It's draw!");
   } else if(humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper.");
      humanScore++;
   } else {
      console.log("You lose! Rock beats scissors.");
      computerScore++;
   } 
}
*/
// CREATE variable humanSelection
// SET it as a function getHumanChoice
// END
// CREATE variable computerSelection
// SET it as a function getComputerChoice
// END
//let humanSelection;
//let computerSelection;
// DISPLAY human and computer selection
//console.log(humanSelection);
//console.log(computerSelection);
// CALL a function playRound
 

// CREATE a function playGame 
// MOVE playRound function to playGame function
// MOVE humanScore and ComputerScore variables to playGame function
// CREATE a loop that is iterated 5 times
   // CALL function playRound
   // DISPLAY string "Human Score: " and add humanScore "Computer Score: " and add computerScore
// ENDLOOP
// IF the value of the humanScore is greater than the computerScore
   // DISPLAY string "You win! Your score is: " and add humanScore, "Computer Score is: " and add computerScore "Congratulations!"
// ELSE
   //DISPLAY string "You loose! Your score is: " and add humanScore, "Computer Score is: " and add computerScore.
// ENDIF
function playGame(roundsNumber) {

   let humanScore = 0;
   let computerScore = 0;

   function playRound(humanChoice, computerChoice) {
      if(humanChoice === "rock" && computerChoice === "rock") {
         console.log("It's draw!");
      } else if(humanChoice === "rock" && computerChoice === "scissors") {
         console.log("You win! Rock beats scissors.");
         humanScore++;
      } else if(humanChoice === "rock" && computerChoice === "paper") {
         console.log("You lose! Paper beats rock.");
         computerScore++;
      } else if(humanChoice === "paper" && computerChoice === "paper") {
         console.log("It's draw!");
      } else if(humanChoice === "paper" && computerChoice === "rock") {
         console.log("You win! Paper beats rock.");
         humanScore++;
      } else if(humanChoice === "paper" && computerChoice === "scissors") {
         console.log("You lose! Scissors beats paper.");
         computerScore++;
      } else if(humanChoice === "scissors" && computerChoice === "scissors") {
         console.log("It's draw!");
      } else if(humanChoice === "scissors" && computerChoice === "paper") {
         console.log("You win! Scissors beats paper.");
         humanScore++;
      } else {
         console.log("You lose! Rock beats scissors.");
         computerScore++;
      }
      console.log("Human Score is: " + humanScore + " " + 
         "Computer Score is: " + computerScore);
   }
   for (i = 0; i < roundsNumber; i++) {
      let humanSelection = getHumanChoice();
      let computerSelection = getComputerChoice();
      console.log(humanSelection);
      console.log(computerSelection);
      playRound(humanSelection, computerSelection);
   }
   if (humanScore > computerScore) {
      console.log("You win! Your score is: " + humanScore + " Computer Score is: " + computerScore + ". " + "Congratulations! Maybe you can try again?");
   } else if (humanScore == computerScore) {
      console.log("It's draw! Your score is: " + humanScore + " Computer Score is: " + computerScore + ". " + "Maybe you can try again?");
   } else
      console.log("You loose! Your score is: " + humanScore + " Computer Score is: " + computerScore + ". " + "Maybe you can try again?");
}

playGame(3);

// BONUS

// Add a check to see if the user has entered rock, paper or scissors, and if he has not, write out a message to that effect.
// Dlaczego w petli for moge powtornie zadeklarowac te sama zmienna po kazdej iteracji?
// Mozna dodac funkcje do wylonienia zwyciezcy  