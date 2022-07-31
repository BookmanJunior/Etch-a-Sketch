const gridContainer = document.getElementById('gridContainer');
const gridElements = gridContainer.getElementsByTagName('div');
const gridSizeBtn = document.getElementById('gridSizeBtn');
const clearBtn = document.getElementById('clearBtn');


gridSizeBtn.addEventListener('click', createNewGrid);
clearBtn.addEventListener('click', clearGrid);
gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.className === 'grid') {
        e.target.className = 'grid painted';
    };
});

function defaultGrid() {
  for (let i = 0; i !== 16 ** 2; i++) {
    const div = document.createElement('div');
    div.className = 'grid';
    gridContainer.appendChild(div);
  }
}

function createNewGrid() {
  let newGridSize = Number(prompt('Enter a new size: ', 'e.g 24'));

  if (newGridSize >= 16 && newGridSize <= 100) {
    removeGridElements();
    for (let i = 0; i !== newGridSize ** 2; i++) {
      const newDiv = document.createElement('div');
      newDiv.className = 'grid';
      gridContainer.appendChild(newDiv);
      setGridElementSize(newDiv, newGridSize);
    }
  }
}

function setGridElementSize(gridElement, gridElementSize) {
  let containerSize = 512;
  // Calculate new size for grid elements and convert px to ems.
  let calcEm = ((containerSize / gridElementSize ** 2) * gridElementSize) / 16;
  gridElement.style.width = `${calcEm}em`;
  gridElement.style.height = `${calcEm}em`;
}

function removeGridElements() {
  Array.from(gridElements).forEach((gridElement) => gridElement.remove());
}

function clearGrid() {
    Array.from(gridElements).forEach((gridElement) => {
        gridElement.className = 'grid';
    });
}

defaultGrid();
