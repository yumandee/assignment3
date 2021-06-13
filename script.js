let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    let table = document.getElementById("grid");
    let row = document.createElement("tr");
    
    numRows++;
    if(numRows == 1) numCols++;

    for(let i = 0; i < numCols; i++) {
        let c = document.createElement("td");
        row.appendChild(c);
    }

    table.appendChild(row);
}

//Adds a column
function addC() {
    let rows = document.querySelectorAll("tr");
    numCols++;

    rows.forEach((row) => {
        let c = document.createElement("td");
        row.appendChild(c);
    });
}

//Removes a row
function removeR() {
    let table = document.getElementById("grid");
    let row = table.lastElementChild;
    if(row) table.removeChild(row);
    if (numRows > 0) numRows--;
    console.log(numRows);
}

//Remove a column
function removeC() {
    let rows = document.querySelectorAll("tr");
    rows.forEach((row) => 
    {
        let c = row.lastElementChild;
        if(c) row.removeChild(c);
    });

    if(numCols > 0) numCols--;

    if(numCols === 0) {
        let r = numRows;
        for(let i = 0; i < r; i++) removeR();
    }
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    let data = document.querySelectorAll("td");
    data.forEach((td) => {
        td.onclick = function() {
            td.style.backgroundColor = colorSelected;
        }
    });

}

function fill() {
    document.querySelectorAll("td").forEach(td => td.style.backgroundColor = colorSelected);
}

function clearAll() {
    document.querySelectorAll("td").forEach(td => td.style.backgroundColor = 'white');
}

function fillU() {
    document.querySelectorAll("td").forEach(td => {
        if(td.style.backgroundColor === "white") td.style.backgroundColor = colorSelected;
    });
}