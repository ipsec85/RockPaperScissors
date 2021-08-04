

let playerScore = 0;
let computerScore = 0;

/* 
    playRound checks player response against computer response.
    Console logs a string stating who won and increments winning point.

*/
function playRound(player, computer){
    // Ties
    if(player === 'rock' && computer === 'rock'){
        console.log('Rock matches Rock. Tie.');
    } else if(player === 'scissors' && computer === 'scissors') {
        console.log('Scissors matches Scissors. Tie.');
    
    } else if(player === 'scissors' && computer === 'scissors') {
        console.log('Scissors matches Scissors. Tie.');
    
    } else if(player === 'paper' && computer === 'paper') {
        console.log('Paper matches Paper. Tie.');
    
    } 
    // Player Wins
    else if(player === 'rock' && computer === 'scissors') {
        console.log('Rock beats Scissors. Player wins.');
        playerScore++;
    } 
    else if(player === 'paper' && computer === 'rock') {
        console.log('Paper beats Rock. Player wins.');
        playerScore++;
    } 
    else if(player === 'scissors' && computer === 'paper') {
        console.log('Scissors beats Paper. Player wins.');
        playerScore++;
    } 
    // Computer Wins
    else if(player === 'rock' && computer === 'paper') {
        console.log('Paper beats Rock. Computer wins.');
        computerScore++;
    }
    else if(player === 'scissors' && computer === 'rock') {
        console.log('Rock beats Scissors. Computer wins.');
        computerScore++;
    }
    else if(player === 'paper' && computer === 'scissors') {
        console.log('Scissors beats Paper. Computer wins.');
        computerScore++;
    }
}

/* 
    computerChoice randomly generates number, 1-3, which is assigned to
    a string and returned.

*/
function computerChoice(){
    let computerNum = Math.floor(Math.random() * 3) + 1;
    if(computerNum === 1){
        return 'rock';
    } else if(computerNum === 2){
        return 'paper';
    } else if(computerNum === 3){
        return 'scissors';
    }

}

/* 
    playerChoice gets input from user and returns a string

*/
function playerChoice(){
    let playerChoose = prompt("Choose to throw 'Rock', 'Paper', or 'Scissors':").toLowerCase();
    
    // Add a means to check for player response to ensure the correct word.
    
    return playerChoose;

}
/* 
    game starts the game. Uses for loop set to 5. calls both playerChoice() and computerChoice()
    and then calls playRound() with string arguments returned from playerChoice() and computerChoice().
    After for loop, notifies user who won.

*/
function game(){
    console.log('This is a game of Rock, Paper, Scissors. Winner is highest score out of 5, including Ties. Go!');

    for(let i = 0; i < 5; i++){
        let player = playerChoice();
        let computer = computerChoice();
        playRound(player, computer);
    }
    if(playerScore > computerScore){
        console.log(`Player wins with a score of ${playerScore} vs ${computerScore}`);
    } else if(computerScore > playerScore) {
        console.log(`Computer wins with a score of ${computerScore} vs ${playerScore}`);
    } else {
        console.log(`Game tied at computer: ${computerScore} vs player: ${playerScore}`);
    }
}

game();