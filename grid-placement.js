const gridContainer = document.querySelector('.grid-container');


function placeBlock(row, column) {
  let newCell = document.createElement('div');
  newCell.classList.add('cell');
  newCell.style.backgroundImage = `url('grid-images/row-${row}-column-${column}.png')`;
  newCell.dataset.row = row;
  newCell.dataset.col = column;
  
  newCell.addEventListener('click', gridInteract);
  
  gridContainer.appendChild(newCell);
}

function populateGrid(width, height) {
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      placeBlock(i, j);
    }
  }
}

const stateSwitchers = {
  door: false,
}

const interactiveTilesCoordinates = {
  door: [
    [5, 30], [5, 31], [5, 32], [6, 30], [6, 31], [6, 32],
  ],
}

function gridInteract(event) {
  let cellCoordinates = [Number(event.target.dataset.col), Number(event.target.dataset.row)];
  console.log('clicked', cellCoordinates);
  for (let [key, value] of Object.entries(interactiveTilesCoordinates)) {
    if (value.some(
      listCoordinate => {
        return listCoordinate.every((val, index) => val === cellCoordinates[index])
      }
    )) {
      swapTiles(key);
      break;
    }
  }
}

function swapTiles(gridObjectName) {
  stateSwitchers[gridObjectName] = !stateSwitchers[gridObjectName];
  for (tileCoordinate of interactiveTilesCoordinates[gridObjectName]) {
    let gridTile = document.querySelector(`[data-col='${tileCoordinate[0]}'][data-row='${tileCoordinate[1]}']`);
    let swapImage = new Image();
    let swapImageURL = `grid-dynamic-tiles/${gridObjectName}/${stateSwitchers[gridObjectName]}/row-${tileCoordinate[1]}-column-${tileCoordinate[0]}.png`;
    swapImage.src = swapImageURL;
    swapImage.onload = function() {
      gridTile.style.backgroundImage = `url('${swapImageURL}')`;
    }
  }
}

populateGrid(18, 45);