let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
  gameBoard.push('');
  const square = document.getElementById(`square-${i}`);
  square.addEventListener('click', () => handleClick(i));
}

// Handle click event
function handleClick(index) {
  if (gameOver) return;
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    document.getElementById(`square-${index}`).classList.add(currentPlayer.toLowerCase());
    checkForWin();
    currentPlayer = currentPlayer === 'X'? 'O' : 'X';
  }
}

// Check for win
function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]]!== '') {
      announceWinner(gameBoard[condition[0]]);
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    announceDraw();
    gameOver = true;
  }
}

// Announce winner
function announceWinner(winner) {
  alert(`Player ${winner} wins!`);
}

// Announce draw
function announceDraw() {
  alert(`It's a draw!`);
}