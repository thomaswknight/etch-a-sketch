const grid = document.querySelector("#grid")
const button = document.querySelector("button")

drawGrid()

function drawGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; i++) {
        const gridCol = document.createElement("div");
        gridCol.className = "column"
        grid.appendChild(gridCol)
        for (let j = 0; j < gridSize; j++) {
            const gridElement = document.createElement("div");
            gridElement.className = "grid-item"
            gridCol.appendChild(gridElement)
        }
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.background = "red"
        })
    });
}

function refreshGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove()
    }
}

const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.background = "red"
    })
});

button.onclick = () => {
    let gridSize = prompt("grid size?");
    console.log(!(gridSize > 0 && gridSize <= 100))
    if (!(gridSize > 0 && gridSize <= 100)) {
        alert("must be between 0 and 100")
        gridSize = 16
    }
    refreshGrid()
    drawGrid(gridSize)
}