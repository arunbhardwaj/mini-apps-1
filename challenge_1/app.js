

function playSpace(e) {
  (e.target.innerText === 'X')
    ? e.target.innerText = 'O'
    : e.target.innerText = 'X'
}

function clearBoard(e) {
  console.log('clearing');
}

const addEventListenersToSpaces = () => {
  //TODO: add event listeners
}

let x = document.getElementsByClassName('space')
for (let i = 0; i < x.length; i++) {
  let y = x.item(i);
  y.addEventListener('click', playSpace);
}

const forEach = (HTMLCollection, callback) => {
  for (let i = 0; i < HTMLCollection.length; i++) {
    let element = HTMLCollection.item(i);
    callback.call(e);
  }
}

// .forEach(element => element.addEventListener('click', playSpace));

document.getElementById('clear-btn').addEventListener('click', clearBoard)