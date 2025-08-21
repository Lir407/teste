const boardElement = document.getElementById("board");
const messageElement = document.getElementById("message");

const BOARD_SIZE = 8;
const EMPTY = 0;
const RED_PIECE = 1;
const BLACK_PIECE = 2;
const RED_KING = 3;
const BLACK_KING = 4;

let board = [];
let currentPlayer = RED_PIECE; // Vermelho começa (embaixo)
let selected = null;           // {row, col}
let mustCapture = false;       // captura obrigatória no turno atual?

// ------- Setup -------
function initializeBoard() {
  board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(EMPTY));

  // Pretas em cima (linhas 0..2)
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if ((r + c) % 2 === 1) board[r][c] = BLACK_PIECE;
    }
  }
  // Vermelhas embaixo (linhas 5..7)
  for (let r = BOARD_SIZE - 3; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if ((r + c) % 2 === 1) board[r][c] = RED_PIECE;
    }
  }
}

function drawBoard() {
  boardElement.innerHTML = "";
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const sq = document.createElement("div");
      sq.className = "square " + ((r + c) % 2 === 0 ? "light" : "dark");
      sq.dataset.row = r;
      sq.dataset.col = c;

      const t = board[r][c];
      if (t !== EMPTY) {
        const p = document.createElement("div");
        p.classList.add("piece");
        if (t === RED_PIECE || t === RED_KING) p.classList.add("red");
        else p.classList.add("black");
        if (t === RED_KING || t === BLACK_KING) p.textContent = "♚";
        sq.appendChild(p);
      }

      sq.addEventListener("click", onSquareClick);
      boardElement.appendChild(sq);
    }
  }
  updateMessage();
  if (selected) {
    const el = querySquare(selected.row, selected.col);
    if (el) el.classList.add("selected");
    highlightPossibleMoves(selected.row, selected.col);
  }
}

function querySquare(r, c) {
  return boardElement.querySelector(`[data-row="${r}"][data-col="${c}"]`);
}

function updateMessage() {
  messageElement.textContent =
    `Vez do ${currentPlayer === RED_PIECE ? "Vermelho" : "Preto"}`
    + (mustCapture ? " (captura obrigatória)" : "");
}

// ------- Utils -------
function isCurrentPlayerPiece(t) {
  return (currentPlayer === RED_PIECE && (t === RED_PIECE || t === RED_KING)) ||
         (currentPlayer === BLACK_PIECE && (t === BLACK_PIECE || t === BLACK_KING));
}
function isKing(t) {
  return t === RED_KING || t === BLACK_KING;
}
function inside(r, c) {
  return r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE;
}

// ------- Movimentação / Regras -------
function onSquareClick(e) {
  const r = parseInt(e.currentTarget.dataset.row);
  const c = parseInt(e.currentTarget.dataset.col);
  const t = board[r][c];

  if (selected) {
    const { row: sr, col: sc } = selected;
    if (isValidMove(sr, sc, r, c)) {
      const captured = makeMove(sr, sc, r, c); // retorna true se houve captura
      // promoção após mover
      promoteIfNeeded(r, c);

      // Se capturou, verificar captura múltipla
      if (captured && canCaptureAgain(r, c)) {
        selected = { row: r, col: c }; // continua o turno com a mesma peça
        mustCapture = true;            // segue obrigatório
        drawBoard();
        return;
      }

      // Termina turno
      selected = null;
      switchPlayer();
      drawBoard();
      return;
    } else {
      // clique inválido: desmarca e tenta selecionar outra
      selected = null;
      drawBoard();
    }
  }

  // Selecionar peça do jogador atual
  if (t !== EMPTY && isCurrentPlayerPiece(t)) {
    selected = { row: r, col: c };
    drawBoard();
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === RED_PIECE ? BLACK_PIECE : RED_PIECE;
  mustCapture = existsMandatoryCapture();
}

function existsMandatoryCapture() {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (isCurrentPlayerPiece(board[r][c]) && canCaptureAgain(r, c)) {
        return true;
      }
    }
  }
  return false;
}

// --- Verifica se movimento proposto é válido considerando regras e obrigatoriedade
function isValidMove(sr, sc, er, ec) {
  if (!inside(er, ec)) return false;
  if (board[er][ec] !== EMPTY) return false;

  const t = board[sr][sc];
  const king = isKing(t);

  // Se existe captura obrigatória no tabuleiro inteiro, só aceita movimentos de captura
  if (mustCapture) {
    return isCaptureMove(sr, sc, er, ec);
  }

  // Sem obrigatoriedade: peça comum anda 1 passo pra frente diagonal; dama desliza diagonal sem pular
  const dr = er - sr, dc = ec - sc;

  if (king) {
    // dama: movimento livre na diagonal sem atravessar peça
    if (Math.abs(dr) !== Math.abs(dc)) return false;
    return pathClear(sr, sc, er, ec);
  } else {
    // peça comum: 1 para frente
    if (Math.abs(dr) === 1 && Math.abs(dc) === 1) {
      if (currentPlayer === RED_PIECE && dr === -1) return true;   // vermelho sobe
      if (currentPlayer === BLACK_PIECE && dr === 1) return true;   // preto desce
    }
  }
  // Se não for movimento simples, pode ainda ser uma captura (quando mustCapture=false e jogador escolhe capturar)
  return isCaptureMove(sr, sc, er, ec);
}

// --- Checa se o caminho diagonal está livre (para damas)
function pathClear(sr, sc, er, ec) {
  const stepr = er > sr ? 1 : -1;
  const stepc = ec > sc ? 1 : -1;
  let r = sr + stepr, c = sc + stepc;
  while (r !== er && c !== ec) {
    if (board[r][c] !== EMPTY) return false;
    r += stepr; c += stepc;
  }
  return true;
}

// --- Movimento de captura?
// Peça comum: captura 2 casas para frente apenas (não pode comer para trás).
// Dama: pode capturar à distância — exatamente um inimigo no caminho e ao menos um vazio depois dele até a casa de destino.
function isCaptureMove(sr, sc, er, ec) {
  const t = board[sr][sc];
  const king = isKing(t);
  const dr = er - sr, dc = ec - sc;

  if (Math.abs(dr) !== Math.abs(dc)) return false; // precisa ser diagonal

  if (!king) {
    // comum: salto de 2 casas, somente para frente
    if (Math.abs(dr) !== 2 || Math.abs(dc) !== 2) return false;
    const mr = sr + dr / 2;
    const mc = sc + dc / 2;
    const mid = board[mr][mc];
    if (mid === EMPTY || isCurrentPlayerPiece(mid)) return false;

    // direção permitida (não pode comer para trás)
    if (currentPlayer === RED_PIECE && dr !== -2) return false; // vermelho sobe
    if (currentPlayer === BLACK_PIECE && dr !==  2) return false; // preto desce
    return true;
  }

  // dama: percurso deve conter exatamente 1 inimigo e nenhum aliado; após o inimigo, caminho até (er,ec) livre
  const stepr = dr > 0 ? 1 : -1;
  const stepc = dc > 0 ? 1 : -1;
  let r = sr + stepr, c = sc + stepc;
  let enemySeen = null;

  while (r !== er && c !== ec) {
    const cell = board[r][c];
    if (cell !== EMPTY) {
      if (isCurrentPlayerPiece(cell)) return false;  // aliado bloqueando
      if (enemySeen) return false;                   // já tinha inimigo: seria 2+
      enemySeen = { r, c };
    }
    r += stepr; c += stepc;
  }

  // precisa ter encontrado exatamente 1 inimigo no caminho
  return !!enemySeen;
}

// --- Executa o movimento; remove peça capturada quando houver. Retorna true/false se capturou.
function makeMove(sr, sc, er, ec) {
  const t = board[sr][sc];
  const king = isKing(t);
  let captured = false;

  // mover
  board[er][ec] = t;
  board[sr][sc] = EMPTY;

  // verificar captura e remover inimigo
  const dr = er - sr, dc = ec - sc;

  if (!king) {
    if (Math.abs(dr) === 2 && Math.abs(dc) === 2) {
      const mr = (sr + er) / 2;
      const mc = (sc + ec) / 2;
      if (board[mr][mc] !== EMPTY && !isCurrentPlayerPiece(board[mr][mc])) {
        board[mr][mc] = EMPTY;
        captured = true;
      }
    }
  } else {
    // dama: remover o único inimigo no caminho
    if (Math.abs(dr) === Math.abs(dc)) {
      const stepr = dr > 0 ? 1 : -1;
      const stepc = dc > 0 ? 1 : -1;
      let r = sr + stepr, c = sc + stepc;
      while (r !== er && c !== ec) {
        if (board[r][c] !== EMPTY && !isCurrentPlayerPiece(board[r][c])) {
          board[r][c] = EMPTY;
          captured = true;
          break; // há exatamente 1 inimigo pelo validador
        }
        r += stepr; c += stepc;
      }
    }
  }

  return captured;
}

function promoteIfNeeded(r, c) {
  const t = board[r][c];
  if (t === RED_PIECE && r === 0) board[r][c] = RED_KING;
  if (t === BLACK_PIECE && r === BOARD_SIZE - 1) board[r][c] = BLACK_KING;
}

// --- Após capturar, verificar se a mesma peça pode capturar novamente
function canCaptureAgain(r, c) {
  const t = board[r][c];
  const king = isKing(t);

  if (!king) {
    const dirs = (t === RED_PIECE) ? [[-2,-2],[-2, 2]] : [[2,-2],[2, 2]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      const mr = r + dr/2, mc = c + dc/2;
      if (!inside(nr, nc)) continue;
      if (board[nr][nc] !== EMPTY) continue;
      if (inside(mr, mc) && board[mr][mc] !== EMPTY && !isCurrentPlayerPiece(board[mr][mc])) {
        return true;
      }
    }
    return false;
  }

  // dama: se em qualquer diagonal existe um inimigo com casas vazias depois dele
  const diagDirs = [[1,1],[1,-1],[-1,1],[-1,-1]];
  for (const [dr, dc] of diagDirs) {
    let r1 = r + dr, c1 = c + dc;
    let enemyFound = false;
    while (inside(r1, c1)) {
      const cell = board[r1][c1];
      if (!enemyFound) {
        if (cell === EMPTY) {
          r1 += dr; c1 += dc; continue;
        }
        if (isCurrentPlayerPiece(cell)) break; // aliado bloqueia
        enemyFound = true;                     // achou inimigo
        r1 += dr; c1 += dc;
      } else {
        // depois do inimigo, precisa haver pelo menos uma casa vazia para pouso
        if (cell === EMPTY) return true;
        break; // algo bloqueia
      }
    }
  }
  return false;
}

// --- Destaques das casas possíveis
function highlightPossibleMoves(r, c) {
  const moves = [];
  const t = board[r][c];
  const king = isKing(t);

  // Gera todas as casas da diagonal possíveis (movimento simples e capturas).
  // Se houver captura obrigatória no tabuleiro, mostramos só capturas da peça.
  if (king) {
    const diag = [[1,1],[1,-1],[-1,1],[-1,-1]];
    for (const [dr, dc] of diag) {
      // varrer diagonal para movimentos simples
      if (!mustCapture) {
        let rr = r + dr, cc = c + dc;
        while (inside(rr, cc) && board[rr][cc] === EMPTY) {
          if (pathClear(r, c, rr, cc)) moves.push([rr, cc]);
          rr += dr; cc += dc;
        }
      }
      // varrer diagonal para capturas: destinos depois de um inimigo
      let rr = r + dr, cc = c + dc, enemy = null;
      while (inside(rr, cc)) {
        if (!enemy) {
          if (board[rr][cc] === EMPTY) { rr += dr; cc += dc; continue; }
          if (isCurrentPlayerPiece(board[rr][cc])) break;
          enemy = { rr, cc };
          rr += dr; cc += dc;
        } else {
          if (board[rr][cc] === EMPTY) moves.push([rr, cc]);
          else break;
          rr += dr; cc += dc;
        }
      }
    }
  } else {
    // peça comum: movimentos simples 1 passo para frente (se não houver captura)
    const step = (t === RED_PIECE) ? -1 : 1;
    if (!mustCapture) {
      [[step, -1], [step, 1]].forEach(([dr, dc]) => {
        const rr = r + dr, cc = c + dc;
        if (inside(rr, cc) && board[rr][cc] === EMPTY) moves.push([rr, cc]);
      });
    }
    // capturas (somente para frente)
    [[step*2, -2], [step*2, 2]].forEach(([dr, dc]) => {
      const rr = r + dr, cc = c + dc;
      const mr = r + dr/2, mc = c + dc/2;
      if (!inside(rr, cc)) return;
      if (board[rr][cc] !== EMPTY) return;
      if (inside(mr, mc) && board[mr][mc] !== EMPTY && !isCurrentPlayerPiece(board[mr][mc])) {
        moves.push([rr, cc]);
      }
    });
  }

  // aplicar destaque
  for (const [rr, cc] of moves) {
    const sq = querySquare(rr, cc);
    if (sq) sq.classList.add("possible-move");
  }
}

// ------- Inicialização -------
initializeBoard();
mustCapture = existsMandatoryCapture();
drawBoard();
