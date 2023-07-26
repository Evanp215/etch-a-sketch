const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
 const gridSquare = document.createElement('div');
 gridSquare.classList.add('square')
 gridSquare.style.cssText = 'border: 1px solid black; width: 25px; height: 25px;'
 gridContainer.appendChild(gridSquare);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.cssText = 'border: 1px solid black; width: 25px; height: 25px; background-color: green;'
  });
});