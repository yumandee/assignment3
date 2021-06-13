let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() {
    let table = document.getElementById("grid");
    let row = document.createElement("tr");
    let c = document.createElement("td");
    table.appendChild(row).appendChild(c);
}

//Adds a column
function addC() {
    let table = document.getElementById("grid");
    let rows = document.querySelectorAll("tr");
    rows.forEach((row) => {
        let c = document.createElement("td");
        row.appendChild(c);
    });
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    alert("Clicked Fill All")
}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}