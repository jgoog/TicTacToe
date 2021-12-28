
console.log('Script is linked')

// alert("PLayer 1 choose a character")

// if player chooses a character update player choosen with that character

var board = ['','','','','','',''];

let  player1Char = 'X'
let currentPlayer = 'X'
const player2Char =  'O'

let gameActive = true;

const Player1Won = 'Congrats Player 1 you win!';
const Player2Won = 'Congrats Player 2 you win!';
const tie = 'Tie';
const squares= Array.from(document.querySelectorAll('.square'));
console.log(squares)
const resetButton = document.querySelector('#reset');
const currentTurn = document.querySelector('.current-turn');

resetButton.addEventListener('click', resetBoard);


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

const updateBoard = (index) => {
    board[index] = currentPlayer;
}

const changePlayer = () => {
    currentTurn.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === player1Char ? player2Char : player1Char;
    currentTurn.innerText = currentPlayer;
    currentTurn.classList.add(`player${currentPlayer}`);
}

const canMove = (square) => {
    if(square.innerText === 'X' || square.innerText === 'O'){
        return false;
    }

    return true;
}

const move =(square, index) => {
    if(canMove(square) && gameActive){
        square.innerText = player1Char;
        square.classList.add(`player${player1Char}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}
// Add evennt listner for each square when it is clicked

squares.forEach((square) => {
    square.addEventListener('click')
})

// squares.forEach((square, index) => {
//     square.addEventListener('click', console.log('hello' + index));
// });


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