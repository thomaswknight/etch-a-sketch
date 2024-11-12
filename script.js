const grid = document.querySelector("#grid");

for (let i = 0; i < 4; i++) {
    const gridCol = document.createElement("div");
    gridCol.className = "column"
    grid.appendChild(gridCol);
    for (let j = 0; j < 4; j++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-element"
        gridElement.textContent = "HELLO WORLD"
        gridCol.appendChild(gridElement)
    }
}