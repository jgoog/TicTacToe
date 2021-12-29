
console.log('Script is linked')

// alert("PLayer 1 choose a character")

// if player chooses a character update player choosen with that character


/////////////////ALL Varibables ****************************************

// the state of the board
let board = ['','','','','','',''];

// Sets player 
let currentPlayer = 'X';

//Boolean for when to know game is active
let gameActive = true;

// Score tracker for scoreboard
var scoreX = 0;
var scoreO = 0;
var scoreTie = 0;
// Alerts winner
const winner = () => `Player ${currentPlayer} has won!`;
const tie = () => 'Tie';

// Gets the individual squares from the board
const squares= Array.from(document.querySelectorAll('.square'));
console.log(squares)

// Reset button 
const resetButton = document.querySelector('#reset');

// Top of the page lets you know whose turn it is
const currentTurn = document.querySelector('.current-turn');

// Sound for the game 
const zapSound = document.querySelector('#zap')
//Vars for updating the score
const updateScoreboardX = document.querySelector('#x-wins')
const updateScoreboardO = document.querySelector('#o-wins')
const tieBreak = document.querySelector('#tiebreak')

// Lets you know whose turn it is
const currentPlayerTurn = () =>`It's ${currentPlayer}'s turn`;
// Pushes whose turn it is into the element at the top of page
currentTurn.innerHTML = currentPlayerTurn();

// All possible win combos
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
///////////////////////////////////////////////////////////////////

// Updates the board with the clicks on the board
const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// function for changing character from X to )
const changePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentTurn.innerHTML = currentPlayerTurn();
}

// Updates the board based on the index
const updateBoard = (index) => {
    board[index] = currentPlayer;
}


// Checks if someone won & update scoreboard
const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winCombos[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        alert( winner())
        if(currentPlayer === 'X') {
             scoreX =scoreX+1;
            updateScoreboardX.innerHTML = scoreX
            
        }
        else {
            scoreO =scoreO+1;
            updateScoreboardO.innerHTML = scoreO
        }
        gameActive = false;
        return;
    }

    if (!board.includes('')){
        alert(tie());
        scoreTie =scoreTie+1;
        tieBreak.innerHTML = scoreTie
        gameActive = false;
        return;
    }
       
}  

// Makes sure can't pick same square twice
const canMove = (square) => {
    if(square.innerHTML === 'X'|| square.innerHTML === 'O'){
        return false;
    }

    return true;
};

// reset board to empty every square
const resetBoard = () => {
    board = ['','','','','','','','',''];
    gameActive = true;

    if(currentPlayer === 'O'){
        changePlayer();
    }
    squares.forEach(square => {
        square.innerText = '';
        square.classList.remove('playerX');
        square.classList.remove('playerO');
    });
}

// Whenever user moves all this take place
const userMove = (square, index) => {
    if(canMove(square) && gameActive){
        square.innerText = currentPlayer;
        square.classList.add(`player${currentPlayer}`);
        zapSound.play();
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}


// Add event listner for each square when it is clicked
squares.forEach((square, index) => {
    square.addEventListener('click', () => userMove(square,index));
});
// Event listener for the reset button
resetButton.addEventListener('click', resetBoard);








//////////////// USE for later when adding Characters ******************************************

// squares.forEach((square) => {
//     square.addEventListener('click', alert('you picked a square'))
// })
// startGame();
// const grid = document.querySelector('.boardgame')


// function startGame() {
//     // document.querySelector(".endgame").style.display = "none";
//     board = Array.from(Array(9).keys());
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].innerText = '';
//         squares[i].style.removeProperty('background-color');
//         squares[i].addEventListener('click', turnClick, false);
//     }
// }

// // Starts Turns Based on Human Click
// function turnClick(square) {
//     if (typeof board[square.target.id] == 'number') {
//         turn(square.target.id, player1Char)
//         // if (!checkTie()) {
// 		// 	setTimeout(function() {
// 		// 		turn(bestSpot(), AI);
// 		// 	}, 400);
//         }
//     }
// // }






































// const characterSelection = document.querySelectorAll('.characters');
// console.log(characterSelection.length)
// console.log(characterSelection[0])
// console.log(characterSelection[1])
// console.log(characterSelection.item(2))



// const selectChar = function () {
//     window.localStorage.setItem('characters', this.getAttribute('src'));
//     console.log(characterSelection);
//     characterSelection.forEach(element => {
//         element.className = 'player1';
//     });

//     this.className += 'Player1 Choosen';
// }

// selectChar.forEach(element => {
//     element.addEventListener('click', selectChar);
// })

//     for (var i = 0; i < characterSelection.length; i++) {
//         if(characterSelection[i].nodeType === 1){
//             var x = characterSelection.childNodes
//             console.log(x)
//             player1Char.innerHTML = characterSelection[1]
//             return
//         }
//         // let player1Char = document.getElementById('p1').innerHTML;
//         // player1Char= characterSelection[i].innerText;
//         // console.log(player1Char)
//       }    
// }




// characterSelection.forEach((btn) => {
//     btn.addEventListener('click', SelectChar)
        // document.getElementById('p1').innerHTML = characterSelection[i];
//         console.log(player1Char)
    // })
// })


// characterSelection.forEach((btn, index) => {
//     btn.addEventListener('click', () => {

//         alert (`You choose Character ${index + 1}`)
//     })
// 