// game play elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const middleText = document.querySelector('#outCome');
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#computerSign');
const thrownComputer = document.querySelector('.thrown-computer');
const thrownPlayer = document.querySelector('.thrown-player');
let playerCurrentScore = document.querySelector('.playerCurrentScore');
let computerCurrentScore = document.querySelector('.computerCurrentScore');

let playerScore = 0;
let computerScore = 0;

// button events
rock.addEventListener('click', function () {
    buttonEvent('rock');
    playerSign.classList = 'far fa-hand-rock fa-3x';
    thrownPlayer.replaceWith(playerSign);
});

paper.addEventListener('click', function () {
    buttonEvent('paper');
    playerSign.classList = 'far fa-hand-paper fa-3x';
    thrownPlayer.replaceWith(playerSign);
});

scissors.addEventListener('click', function () {
    buttonEvent('scissors');
    playerSign.classList = 'far fa-hand-scissors fa-3x';
    thrownPlayer.replaceWith(playerSign);
});

/* 
    game starts the game. sets center middleText for game
*/
function gameStart() {
    middleText.innerText = 'This is a game of Rock, Paper, Scissors. Winner is the first to 5. Go!';
}

gameStart();

/*
    Update img of what player and computer threw
*/
function thrown(player, computer) {
    console.log(`player is ${player}`);
    console.log(`computer is ${computer}`);
}

/* 
    playRound checks player response against computer response.
    Checks to see if anyone has won at end.
*/
function playRound(player, computer) {
    // Tie scenarios
    if (player === 'rock' && computer === 'rock') {
        thrown(player, computer);
        middleText.innerText = 'Rock matches Rock. Tie.';
    } else if (player === 'scissors' && computer === 'scissors') {
        thrown(player, computer);
        middleText.innerText = 'Scissors matches Scissors. Tie.';
    } else if (player === 'scissors' && computer === 'scissors') {
        thrown(player, computer);
        middleText.innerText = 'Scissors matches Scissors. Tie.';
    } else if (player === 'paper' && computer === 'paper') {
        thrown(player, computer);
        middleText.innerText = 'Paper matches Paper. Tie.';
    }
    // Player Wins
    else if (player === 'rock' && computer === 'scissors') {
        thrown(player, computer);
        middleText.innerText = 'Rock beats Scissors. Player wins.';
        playerScore++;
        playerCurrentScore.innerText = playerScore;
    }
    else if (player === 'paper' && computer === 'rock') {
        thrown(player, computer);
        middleText.innerText = 'Paper beats Rock. Player wins.';
        playerScore++;
        playerCurrentScore.innerText = playerScore;
    }
    else if (player === 'scissors' && computer === 'paper') {
        thrown(player, computer);
        middleText.innerText = 'Scissors beats Paper. Player wins.';
        playerScore++;
        playerCurrentScore.innerText = playerScore;
    }
    // Computer Wins
    else if (player === 'rock' && computer === 'paper') {
        thrown(player, computer);
        middleText.innerText = 'Paper beats Rock. Computer wins.';
        computerScore++;
        computerCurrentScore.innerText = computerScore;
    }
    else if (player === 'scissors' && computer === 'rock') {
        thrown(player, computer);
        middleText.innerText = 'Rock beats Scissors. Computer wins.';
        computerScore++;
        computerCurrentScore.innerText = computerScore;
    }
    else if (player === 'paper' && computer === 'scissors') {
        thrown(player, computer);
        middleText.innerText = 'Scissors beats Paper. Computer wins.';
        computerScore++;
        computerCurrentScore.innerText = computerScore;
    }
    // check at end of playRound function if anyone has won
    if (playerScore === 5 || computerScore === 5) {
        gameOverMan();
    }
}

/*
    Update computer thrown sign
*/
function computerPlayed(sign) {
    if (sign === 'rock') {
        computerSign.classList = 'far fa-hand-rock fa-3x';
        thrownComputer.replaceWith(computerSign);
    } else if (sign === 'paper') {
        computerSign.classList = 'far fa-hand-paper fa-3x';
        thrownComputer.replaceWith(computerSign);
    } else if (sign === 'scissors') {
        computerSign.classList = 'far fa-hand-scissors fa-3x';
        thrownComputer.replaceWith(computerSign);
    }
}

/* 
    computerChoice randomly generates number, 1-3, which is assigned to
    a string and returned.
*/
function computerChoice() {

    let computerNum = Math.floor(Math.random() * 3) + 1;
    if (computerNum === 1) {
        computerPlayed('rock');
        return 'rock';
    } else if (computerNum === 2) {
        computerPlayed('paper');
        return 'paper';
    } else if (computerNum === 3) {
        computerPlayed('scissors');
        return 'scissors';
    }
}

/*   
    buttonEvent takes button event in from player,
    checks if anyone won, if not, continues game.
*/
function buttonEvent(playerChoice) {
    let computer = computerChoice();
    playRound(playerChoice, computer);
}

/* 
    check to see if someone won
*/

function didSomeoneWin() {
    if (playerScore === 5 || computerScore === 5) {
        gameOverMan();
    }
}

/*
    game over
*/

function gameOverMan() {
    if (playerScore > computerScore) {
        middleText.innerText = `Player won with a score of ${playerScore} vs. Computer score ${computerScore}`;
    } else {
        middleText.innerText = `Computer won with a score of ${computerScore} vs. Player score ${playerScore}`;
    }
}

