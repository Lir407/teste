const DECKS = {
  emoji: ['😀','😎','🤓','🥳','😴','😺','🤖','👻','🦄','🐸','🐼','🐧','⚽','🎲','🎧','🎯','🍕','🍔'],
  frutas: ['🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍒','🥝','🍍','🥥','🥭','🫐','🍑','🍈','🍅','🥑'],
  animais: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦'],
  formas: ['⭐','❤️','⬛','⬜','🔺','🔻','🔷','🔶','🔸','🔹','🟪','🟩','🟧','🟥','🟦','◼️','◻️','🔘']
};

let firstCard = null, lock = false, moves = 0, matches = 0, timer = null, seconds = 0;
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const timeEl = document.getElementById('time');
const bestEl = document.getElementById('best');
const themeSel = document.getElementById('theme');
const sizeSel = document.getElementById('size');
const btnNew = document.getElementById('newGame');
const winModal = document.getElementById('winModal');
const finalTimeEl = document.getElementById('finalTime');
const finalMovesEl = document.getElementById('finalMoves');
const playAgainBtn = document.getElementById('playAgain');
const closeModalBtn = document.getElementById('closeModal');

function shuffle(array){
  for(let i=array.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array;
}

const pad = n => n.toString().padStart(2,'0');
function formatTime(s){
  const m = Math.floor(s/60);
  const sec = s%60;
  return `${pad(m)}:${pad(sec)}`;
}

function startTimer(){
  if(timer) return;
  timer = setInterval(()=>{
    seconds++;
    timeEl.textContent = formatTime(seconds);
  },1000);
}
function stopTimer(){
  clearInterval(timer);
  timer = null;
}

function getDeck(theme,size){
  const total = size*size;
  const pairs = total/2;
  const base = DECKS[theme].slice(0,pairs);
  return shuffle([...base,...base]);
}

function renderBoard(size){
  board.className='board';
  board.classList.add(`size-${size}`);
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.innerHTML = '';
}

function createCard(symbol){
  const card = document.createElement('button');
  card.className = 'card';
  card.dataset.symbol = symbol;
  card.innerHTML = `
    <div class="card-inner">
      <div class="face back">❔</div>
      <div class="face front">${symbol}</div>
    </div>
  `;
  card.addEventListener('click', onFlip);
  return card;
}

function onFlip(e){
  const card = e.currentTarget;
  if(lock || card.classList.contains('is-flipped') || card.classList.contains('is-matched')) return;
  if(!timer && moves===0 && matches===0) startTimer();
  card.classList.add('is-flipped');
  if(!firstCard){ firstCard=card; return; }

  moves++;
  movesEl.textContent = moves;

  const isMatch = firstCard.dataset.symbol === card.dataset.symbol;
  if(isMatch){
    firstCard.classList.add('is-matched');
    card.classList.add('is-matched');
    firstCard = null;
    matches++;

    const totalPairs = (parseInt(sizeSel.value)**2)/2;
    if(matches===totalPairs){
      stopTimer();
      finalTimeEl.textContent = formatTime(seconds);
      finalMovesEl.textContent = moves;
      saveBest();
      openWin();
    }
  } else {
    lock = true;
    const first = firstCard, second = card;
    setTimeout(()=>{
      first.classList.remove('is-flipped');
      second.classList.remove('is-flipped');
      firstCard = null;
      lock = false;
    },650);
  }
}

const KEY='memory.best';
function loadBest(){
  const key = `${KEY}.${themeSel.value}.${sizeSel.value}`;
  const raw = localStorage.getItem(key);
  if(!raw){ bestEl.textContent='—'; return; }
  try{
    const {moves,seconds} = JSON.parse(raw);
    bestEl.textContent = `${moves}j • ${formatTime(seconds)}`;
  }catch{
    bestEl.textContent='—';
  }
}
function saveBest(){
  const key = `${KEY}.${themeSel.value}.${sizeSel.value}`;
  const raw = localStorage.getItem(key);
  let shouldSave = true;
  if(raw){
    try{
      const prev = JSON.parse(raw);
      if(moves>prev.moves) shouldSave=false;
      if(moves===prev.moves && seconds>=prev.seconds) shouldSave=false;
    }catch{}
  }
  if(shouldSave){
    localStorage.setItem(key, JSON.stringify({moves,seconds}));
    loadBest();
  }
}

function newGame(){
  stopTimer();
  seconds=0; moves=0; matches=0;
  movesEl.textContent='0'; timeEl.textContent='00:00';
  firstCard = null; lock=false;

  const size = parseInt(sizeSel.value);
  renderBoard(size);
  const deck = getDeck(themeSel.value,size);
  deck.forEach(sym => board.appendChild(createCard(sym)));

  loadBest();
}

function openWin(){
  if(typeof winModal.showModal === 'function') winModal.showModal();
  else alert('Parabéns!');
}
function closeWin(){
  if(winModal.open) winModal.close();
}

// Corrigido o arrow function aqui
btnNew.addEventListener('click', newGame);
themeSel.addEventListener('change', newGame);
sizeSel.addEventListener('change', newGame);
playAgainBtn.addEventListener('click', () => { closeWin(); newGame(); });
closeModalBtn.addEventListener('click', closeWin);

// Inicia o jogo
newGame();
