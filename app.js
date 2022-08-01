const gridContainer = document.getElementById("gridContainer");
const gridElements = gridContainer.getElementsByTagName("div");
const gridSizeBtn = document.getElementById("gridSizeBtn");
const colorModeBtn = document.getElementById("colorModeBtn");
const rgbBtn = document.getElementById("RandomColorBtn");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");

let colorModeBtnClicked = false;
let rgbBtnClicked = false;
let eraserBtnClicked = false;

gridSizeBtn.addEventListener("click", createNewGrid);
clearBtn.addEventListener("click", clearGrid);
gridContainer.addEventListener("mouseover", drawOnGrid);
colorModeBtn.addEventListener("click", () => {
  colorModeBtnClicked = true;
  rgbBtnClicked = false;
  eraserBtnClicked = false;
});

rgbBtn.addEventListener("click", () => {
  rgbBtnClicked = true;
  colorModeBtnClicked = false;
  eraserBtnClicked = false;
});

eraserBtn.addEventListener("click", () => {
  eraserBtnClicked = true;
  colorModeBtnClicked = false;
  rgbBtnClicked = false;
});

function defaultGrid() {
    createGridElements(16)
  }

function createNewGrid() {
  let newGridSize = Number(prompt("Enter a new size: ", "e.g 24"));

  if (newGridSize >= 16 && newGridSize <= 100) {
    removeGridElements();
    createGridElements(newGridSize);
    }
  }

function createGridElements(gridSize) {
  for (let i = 0; i !== gridSize ** 2; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "grid";
    gridContainer.appendChild(newDiv);
    setGridElementSize(newDiv, gridSize);
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
    gridElement.style.background = `rgb(255, 255, 255)`;
  });
  colorModeBtnClicked = true;
}

function drawOnGrid(e) {
  if (colorModeBtnClicked) {
    if (e.target.className === "grid") {
      e.target.style.backgroundColor = `rgba(0, 0, 0, 100)`;
    }
  } else if (rgbBtnClicked) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    if (e.target.className === "grid") {
      e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 100)`;
    }
  } else if (eraserBtnClicked) {
    if (e.target.className === "grid") {
      e.target.style.background = "rgb(255, 255, 255)";
    }
  } else {
    if (e.target.className === "grid") {
      e.target.style.backgroundColor = `rgba(0, 0, 0, 100)`;
    }
  }
}

defaultGrid();
