const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const size = 10;
let pacmanPos = 0;
let score = 0;
let gameOver = false;

// Criar grid com dots
const cells = [];
for(let i = 0; i < size*size; i++){
  const cell = document.createElement('div');
  cell.classList.add('cell');

  const dot = document.createElement('div');
  dot.classList.add('dot');
  cell.appendChild(dot);

  game.appendChild(cell);
  cells.push(cell);
}

// Função para desenhar Pac-Man
function drawPacman() {
  // Remove pacman antigo
  cells.forEach(c => {
    const old = c.querySelector('.pacman');
    if(old) c.removeChild(old);
  });

  // Cria elemento Pac-Man
  const pacman = document.createElement('div');
  pacman.classList.add('pacman');
  pacman.textContent = '😋'; // Emoji para Pac-Man
  cells[pacmanPos].appendChild(pacman);
}

drawPacman();

// Fantasmas
let ghosts = [99, 90];
ghosts.forEach(pos => {
  const ghost = document.createElement('div');
  ghost.classList.add('ghost');
  ghost.textContent = '👻';
  cells[pos].appendChild(ghost);
});

// Movimentação Pac-Man
document.addEventListener('keydown', (e) => {
  if(gameOver) return;

  // Calcula nova posição
  let newPos = pacmanPos;
  if(e.key === 'ArrowUp' && pacmanPos >= size) newPos -= size;
  if(e.key === 'ArrowDown' && pacmanPos < size*(size-1)) newPos += size;
  if(e.key === 'ArrowLeft' && pacmanPos % size !== 0) newPos -= 1;
  if(e.key === 'ArrowRight' && pacmanPos % size !== size-1) newPos += 1;

  pacmanPos = newPos;
  drawPacman();

  // Comer dots
  const dot = cells[pacmanPos].querySelector('.dot');
  if(dot){
    cells[pacmanPos].removeChild(dot);
    score += 10;
    scoreDisplay.textContent = 'Pontuação: ' + score;
  }

  checkGameOver();
});

// Movimento aleatório dos fantasmas
function moveGhosts() {
  ghosts.forEach((ghostPos, i) => {
    const ghostElem = cells[ghostPos].querySelector('.ghost');
    if(ghostElem) cells[ghostPos].removeChild(ghostElem);

    const directions = [-1, 1, -size, size];
    let move = directions[Math.floor(Math.random() * directions.length)];
    let newPos = ghostPos + move;

    // Limites da grid
    if(newPos >= 0 && newPos < size*size && newPos !== pacmanPos){
      ghosts[i] = newPos;
    }

    const ghost = document.createElement('div');
    ghost.classList.add('ghost');
    ghost.textContent = '👻';
    cells[ghosts[i]].appendChild(ghost);
  });
  checkGameOver();
}

// Verificar colisão
function checkGameOver() {
  if(ghosts.includes(pacmanPos)){
    gameOver = true;
    alert('Fim de jogo! Pontuação final: ' + score);
    window.location.reload();
  }
}

// Atualizar movimento dos fantasmas a cada 700ms
setInterval(moveGhosts, 700);