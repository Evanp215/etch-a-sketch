let color = "black";

document.addEventListener("DOMContentLoaded", function() {
  createGrid(16);

  const selectSize = document.querySelector('#popup');
  selectSize.addEventListener('click', function(){
    let size = getSize();
    createGrid(size);
  });
});


function createGrid(size) {
  const grid = document.querySelector('#gridContainer');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  
  for(let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
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
  else {
    message.innerHTML = "Now You Play!"
  }
  return input;
}

function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
    this.style.backgroundColor = 'black';
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}