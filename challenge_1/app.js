// CHANGE THESE VALUES FOR CHANGING BOARD SIZE
const _ROWS = 3;
const _COLS = 3;
const _Player1 = prompt('Name Player 1:') || 'Player X';
const _Player2 = prompt('Name Player 2:') || 'Player O';

//TODO: Implement Draws and maybe have an in-memory Board like in n-queens
// or scoreboard feature

function playSpace(e) {
  e.target.innerText = _turn
  changeTurn();
  checkForWinner();
}

function changeTurn() {
  (_turn === 'X')
    ? _turn = 'O'
    : _turn = 'X'
}

function clearBoard() {
  forEach(document.getElementsByClassName('space'), (element) => {
    element.innerText = '';
  })
  _turn = 'X';
}

function checkForWinner() {
  _checkRows();
  _checkCols();
  _checkDiagonals();
}

function _checkDiagonals() {
  _checkMajorDiagonal();
  _checkMinorDiagonal()
}

function _checkMajorDiagonal() {
  let str = '';
  let row = 1, col = 1;
  while (row <= _ROWS && col <= _COLS) {
    str += document.getElementById(`row-${row}`).getElementsByClassName(`col${col}`).item(0).innerText;
    row++; col++;
  }
  _alertIfWon(str);
}

function _checkMinorDiagonal() {
  let str = '';
  let row = 1, col = _COLS;
  while (row <= _ROWS && col >= 1) {
    str += document.getElementById(`row-${row}`).getElementsByClassName(`col${col}`).item(0).innerText;
    row++; col--;
  }
  _alertIfWon(str);
}

function _checkCols() {
  for (let i = 1; i <= _COLS; i++) {
    let str = '';
    forEach(document.getElementsByClassName('col' + i), (element) => {
      str += element.innerText;
    })
    _alertIfWon(str);
  }
}

function _checkRows() {
  forEach(document.getElementsByClassName('row'), (rows) => {
    let str = '';
    forEach(rows.cells, (element) => {
      if (element.classList.contains('space')) {
        str += element.innerText;
      }
    })
    _alertIfWon(str);
  })
}

function _alertIfWon(string) {
  // TODO: Right now, the winning DOM element doesn't get placed before the alert happens.
  // Console.logs will fix this, but figure a way around it.
  // Tried ==> Using a callback in playSpace that would then invoke changeTurn and
  // checkForWinner did NOT work.
  if (string === 'XXX' ) {
    alert(`${_Player1} wins!`);
  } else if (string === 'OOO') {
    alert(`${_Player2} wins!`);
  }
}

function forEach(HTMLCollection, callback) {
  for (let i = 0; i < HTMLCollection.length; i++) {
    let element = HTMLCollection.item(i);
    callback(element);
  }
}

const addEventListenersToSpaces = () => {
  forEach(document.getElementsByClassName('space'), (element) => {
    element.addEventListener('click', playSpace);
  })
}

//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

let _turn = 'X';

// Clear board
document.getElementById('clear-btn').addEventListener('click', clearBoard)

// Are callbacks always async?
addEventListenersToSpaces();

/*
View: What it looks like visually. DOM page
Controller: How a user adds a task or marks as complete
*/