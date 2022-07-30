const gridContainer = document.getElementById('gridContainer');
let gridNumber = 16;
let gridNumberSqr = gridNumber**2


function createGrid() {
for (let i = 0; i !== gridNumberSqr; i++) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    gridContainer.appendChild(grid);
    setGridSize(grid);
  };
};

function setGridSize(gridElement) {
    let containerSize = 512
    let calcEm = (containerSize / gridNumberSqr) * gridNumber / 16;
    gridElement.style.width = `${calcEm}em`
    gridElement.style.height = `${calcEm}em`
}

createGrid()