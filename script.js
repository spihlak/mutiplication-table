const multiplicationTable = document.getElementById("multiplication-table");

for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
        const cell = document.createElement("div");
        cell.textContent = row * col;
        multiplicationTable.appendChild(cell);
        if (col == 1 || row == 1) {
            cell.classList.add("header");
        }
        if (col === row) {
            cell.classList.add("product");
        }
    }
    
}