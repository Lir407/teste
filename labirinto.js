const board = document.getElementById("board");
const fxCanvas = document.getElementById("fx");
const toast = document.getElementById("toast");
const winTemplate = document.getElementById("win-template");
const timeDisplay = document.getElementById("time");
const stepsDisplay = document.getElementById("steps");
const sizeInput = document.getElementById("size");
const btnNew = document.getElementById("btnNew");
const btnReset = document.getElementById("btnReset");

const CELL_SIZE = 20;
const FX_COLOR = "rgba(0, 255, 255, 0.5)";

let maze = [], player = {x:0,y:0}, end={x:0,y:0}, steps=0;
let timerInterval, startTime;
let currentWidth=21, currentHeight=15;

// --- Maze Generation ---
function generateMaze(width, height) {
  const newMaze = Array.from({length:height},()=>Array(width).fill(1));

  function carve(x,y){
    newMaze[y][x]=0;
    const dirs=[[x-2,y,x-1,y],[x+2,y,x+1,y],[x,y-2,x,y-1],[x,y+2,x,y+1]].sort(()=>Math.random()-0.5);
    for(const [nx,ny,px,py] of dirs){
      if(nx>0 && nx<width-1 && ny>0 && ny<height-1 && newMaze[ny][nx]===1){
        newMaze[py][px]=0;
        carve(nx,ny);
      }
    }
  }
  carve(1,1);
  newMaze[1][1]=2;
  newMaze[height-2][width-2]=3;
  return newMaze;
}

// --- Initialize Game ---
function initGame(width,height){
  currentWidth=width; currentHeight=height;
  maze=generateMaze(width,height);
  player={x:1,y:1}; end={x:width-2,y:height-2};
  steps=0; stepsDisplay.textContent=steps;
  startTime=new Date();
  clearInterval(timerInterval);
  timerInterval=setInterval(updateTimer,1000);
  drawMaze(); drawFx();
}

// --- Draw Maze ---
function drawMaze(){
  board.innerHTML="";
  board.style.gridTemplateColumns=`repeat(${currentWidth},${CELL_SIZE}px)`;
  board.style.gridTemplateRows=`repeat(${currentHeight},${CELL_SIZE}px)`;
  for(let y=0;y<currentHeight;y++){
    for(let x=0;x<currentWidth;x++){
      const cell=document.createElement("div");
      cell.classList.add("cell");
      if(maze[y][x]===1) cell.classList.add("wall");
      else if(maze[y][x]===2) cell.classList.add("start-cell");
      else if(maze[y][x]===3) cell.classList.add("end-cell");
      board.appendChild(cell);
    }
  }
  updatePlayer();
}

// --- Player ---
function updatePlayer(){
  Array.from(board.children).forEach(c=>c.classList.remove("player"));
  const index=player.y*currentWidth+player.x;
  board.children[index].classList.add("player");
}

function drawFx(){
  const ctx=fxCanvas.getContext("2d");
  fxCanvas.width=currentWidth*CELL_SIZE;
  fxCanvas.height=currentHeight*CELL_SIZE;
  ctx.clearRect(0,0,fxCanvas.width,fxCanvas.height);
  ctx.beginPath();
  ctx.arc(player.x*CELL_SIZE+CELL_SIZE/2,player.y*CELL_SIZE+CELL_SIZE/2,CELL_SIZE*0.8,0,Math.PI*2);
  ctx.fillStyle=FX_COLOR;
  ctx.shadowBlur=20;
  ctx.shadowColor=FX_COLOR;
  ctx.fill();
  ctx.shadowBlur=0;
}

// --- Move Player ---
function movePlayer(dx,dy){
  const nx=player.x+dx, ny=player.y+dy;
  if(nx>=0 && nx<currentWidth && ny>=0 && ny<currentHeight && maze[ny][nx]!==1){
    player.x=nx; player.y=ny; steps++;
    stepsDisplay.textContent=steps;
    updatePlayer(); drawFx(); checkWin();
  } else showToast("Parede!","error");
}

function checkWin(){
  if(player.x===end.x && player.y===end.y){
    clearInterval(timerInterval);
    showWinModal();
  }
}

// --- Timer & Toast ---
function updateTimer(){
  const elapsed=new Date()-startTime;
  const min=Math.floor(elapsed/60000);
  const sec=Math.floor((elapsed%60000)/1000);
  timeDisplay.textContent=`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

function showToast(msg,type="info"){
  toast.textContent=msg;
  toast.className=`toast show ${type}`;
  setTimeout(()=>toast.classList.remove("show"),2000);
}

// --- Modal ---
function showWinModal(){
  const modal=winTemplate.content.cloneNode(true);
  modal.querySelector("#summary").textContent=`Tempo: ${timeDisplay.textContent}, Passos: ${steps}`;
  document.body.appendChild(modal);
  document.getElementById("again").addEventListener("click",()=>{
    document.querySelector(".modal").remove();
    initGame(currentWidth,currentHeight);
  });
  document.getElementById("close").addEventListener("click",()=>{
    document.querySelector(".modal").remove();
  });
}

// --- Event Listeners ---
document.addEventListener("keydown",e=>{
  switch(e.key){
    case "ArrowUp": case "w": movePlayer(0,-1); break;
    case "ArrowDown": case "s": movePlayer(0,1); break;
    case "ArrowLeft": case "a": movePlayer(-1,0); break;
    case "ArrowRight": case "d": movePlayer(1,0); break;
    case "r": initGame(currentWidth,currentHeight); break;
  }
});

btnNew.addEventListener("click",()=>{
  const newSize=parseInt(sizeInput.value);
  if(newSize%2!==1 || newSize<11 || newSize>51){
    showToast("Tamanho deve ser ímpar entre 11 e 51!","error");
    return;
  }
  initGame(newSize,Math.floor(newSize*0.7));
});
btnReset.addEventListener("click",()=>initGame(currentWidth,currentHeight));

// --- Start Game ---
initGame(currentWidth,currentHeight);
