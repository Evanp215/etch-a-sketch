document.addEventListener("DOMContentLoaded", function() {
  console.log("hello");
  createGrid(6);
});

const selectSize = document.querySelector('#popup');
  selectSize.addEventListener('click', getSize);

function createGrid(size) {
  const grid = document.querySelector('#gridContainer');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  
  for(let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    grid.insertAdjacentElement('beforeend', div);
  }
}

function getSize() {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector('#message')
  if (input == "") {
    message.innerHTML = "Please provide a number"
  }
  else if (input < 0 || input > 100) {
    message.innerHTML = "Please enter a number between 1 and 100"
  }
}