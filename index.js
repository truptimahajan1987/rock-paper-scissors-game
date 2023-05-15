const buttons =document.querySelectorAll("button");
const resultE1 = document.getElementById("result");
const playerScoreE1 = document.getElementById("user-score");
const computerScoreE1 = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click" , () =>
    {
    // console.log("clicked!" , button.id ,"Computer Choice:",computerPlay());
   const result = playRound(button.id , computerPlay());
   console.log(result);
   resultE1.textContent= result;
   playerScoreE1.textContent = playerScore;
   computerScoreE1.textContent= computerScore;
     } );
});

function computerPlay(){
    const choice = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}
function playRound(playerSelection , computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
       ( playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") 

    ){
        playerScore++;
        return "You win!  " + playerSelection+ " beats "+ computerSelection;
    }
    else {
        computerScore++;
        return "You lose!  " + computerSelection+ " beats "+ playerSelection;

    }
}