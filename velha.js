const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');
let xTurn = true;
let gameActive = true;

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function handleClick(e){
  const cell = e.target;
  if(cell.textContent || !gameActive) return;

  cell.textContent = xTurn ? 'X' : 'O';
  checkWin();
  xTurn = !xTurn;
}

function checkWin(){
  let roundWon = false;

  for(const combo of winningCombinations){
    const [a,b,c] = combo;
    if(cells[a].textContent && 
       cells[a].textContent === cells[b].textContent &&
       cells[a].textContent === cells[c].textContent){
      roundWon = true;
      break;
    }
  }

  if(roundWon){
    gameActive = false;
    message.textContent = `O jogador ${xTurn ? 'X' : 'O'} venceu!`;
    return;
  }

  if([...cells].every(cell => cell.textContent)){
    gameActive = false;
    message.textContent = "Empate!";
  }
}

function restartGame(){
  cells.forEach(cell => cell.textContent = '');
  xTurn = true;
  gameActive = true;
  message.textContent = '';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);