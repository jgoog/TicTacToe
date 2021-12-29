
console.log('Script is linked')

// alert("PLayer 1 choose a character")

// if player chooses a character update player choosen with that character

let board = ['','','','','','',''];

// let  player1Char = 'X'
let currentPlayer = 'X';
// const player2Char =  'O'

let gameActive = true;

const winner = () => `Player ${currentPlayer} has won!`;
const tie = () => 'Tie';
const squares= Array.from(document.querySelectorAll('.square'));
console.log(squares)
const resetButton = document.querySelector('#reset');
const currentTurn = document.querySelector('.current-turn');
const champion = document.querySelector('#champion');
const announcer = document.querySelector('.announcer')
const zapSound = document.querySelector('#zap')
// const updateScoreboard = () => document.querySelector('#x-wins').innerHTML = game.getWins('X');
// document.querySelector('#o-wins').innerHTML = game.getWins('O');
const currentPlayerTurn = () =>`It's ${currentPlayer}'s turn`;

currentTurn.innerHTML = currentPlayerTurn();


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

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

const changePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    currentTurn.innerHTML = currentPlayerTurn();
}

const updateBoard = (index) => {
    board[index] = currentPlayer;
}



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
        gameActive = false;
        return;
    }

    if (!board.includes('')){
        alert(tie());
        gameActive = false;
        return;
    }
       
}  


const canMove = (square) => {
    if(square.innerHTML === 'X'|| square.innerHTML === 'O'){
        return false;
    }

    return true;
};

const resetBoard = () => {
    board = ['','','','','','','','',''];
    gameActive = true;
    announcer.classList.add('hide');

    if(currentPlayer === 'O'){
        changePlayer();
    }
    squares.forEach(square => {
        square.innerText = '';
        square.classList.remove('playerX');
        square.classList.remove('playerO');
    });
}

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


// Add evennt listner for each square when it is clicked
squares.forEach((square, index) => {
    square.addEventListener('click', () => userMove(square,index));
});

resetButton.addEventListener('click', resetBoard);


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