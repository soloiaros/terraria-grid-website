const gridContainer = document.querySelector('.grid-container');

function placeBlock(row, column) {
  let newCell = document.createElement('div');
  newCell.classList.add('cell');
  // newCell.style.border = '1px solid white';
  newCell.style.backgroundImage = `url('grid-images/row-${row}-column-${column}.png')`;
  gridContainer.appendChild(newCell);
}

function populateGrid(width, height) {
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      placeBlock(i, j);
    }
  }
}

populateGrid(18, 45);