const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');

let score = 0;
let time = 30;
let currentHole;
let gameInterval;
let timerInterval;

function randomHole() {
  const index = Math.floor(Math.random() * holes.length);
  return holes[index];
}

function showMole() {
  if(currentHole) currentHole.innerHTML = ''; // Remove mole antiga

  currentHole = randomHole();
  const mole = document.createElement('div');
  mole.classList.add('mole');
  mole.textContent = '🐭'; // Emoji do ratinho
  mole.style.fontSize = '40px'; // Ajusta o tamanho do emoji
  currentHole.appendChild(mole);

  mole.addEventListener('click', whack);
}

function whack() {
  score += 1;
  scoreDisplay.textContent = 'Pontuação: ' + score;
  this.parentElement.innerHTML = '';
}

function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = 'Pontuação: ' + score;
  timeDisplay.textContent = 'Tempo: ' + time + 's';

  if(gameInterval) clearInterval(gameInterval);
  if(timerInterval) clearInterval(timerInterval);

  gameInterval = setInterval(showMole, 800); // Mole aparece a cada 0.8s

  timerInterval = setInterval(() => {
    time--;
    timeDisplay.textContent = 'Tempo: ' + time + 's';
    if(time <= 0){
      clearInterval(gameInterval);
      clearInterval(timerInterval);
      alert('Fim de jogo! Pontuação final: ' + score);
      holes.forEach(h => h.innerHTML = '');
    }
  }, 1000);
}

startBtn.addEventListener('click', startGame);