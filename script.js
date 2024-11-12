const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const gridCol = document.createElement("div");
    gridCol.className = "column"
    grid.appendChild(gridCol);
    for (let j = 0; j < 16; j++) {
        const gridElement = document.createElement("div");
        gridElement.className = "grid-item"
        gridCol.appendChild(gridElement)
    }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.background = "red";
    });
  });