function createGrid(squaresPerLine) {
    const container = document.querySelector("#container");
    
    for (let i = 0; i < squaresPerLine; i++){

        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);

        for(let j = 0; j < squaresPerLine; j++){

            const gridItem = document.createElement("div");
            gridItem.classList.add("gridDiv");
            gridItem.style.border = "solid 0.05px Grey";
            gridItem.style.boxSizing = "borderBox"
            gridItem.style.flexGrow = "1";
            column.appendChild(gridItem);
        }
    }
    addEventListenerAllGridDivs()
    
}
//
createGrid(16);


function addEventListenerAllGridDivs() {
    let nodeList = document.querySelectorAll(".gridDiv");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener("mouseenter", (e) => {
            nodeList[i].style.background = "black";
        });
    }
}

function newGrid() {
    let squaresPerSide = prompt("Enter the number of squares per side:");
    if (squaresPerSide <= 100) {
        document.querySelector("#container").innerHTML = ""; 
        createGrid(squaresPerSide);
    }
}