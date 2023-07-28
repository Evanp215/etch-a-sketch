document.addEventListener("DOMContentLoaded", function() {
  creatGrid(32);
});

function creatGrid(size) {
  const grid = document.querySelector('#gridContainer');

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}