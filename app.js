const gridContainer = document.getElementById('gridContainer');


for (let i = 0; i !== 256; i++) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    gridContainer.appendChild(grid);
}