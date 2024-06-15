//window.onload = run;

function rowFromArray(array) {
    let row = document.createElement("tr");

    for (let i = 0; i < array.length; i++) {
        let td = document.createElement("td");
        let textnode = document.createTextNode(array[i]);
        td.appendChild(textnode);
        row.appendChild(td);
    }

    return row;
}

function build_table() {
    // grab form
    let form = document.getElementById("parameter-form");

    // populate variables from from
    let xMin = Number(form.elements["min_col"].value);
    let xMax = Number(form.elements["max_col"].value);
    let yMin = Number(form.elements["min_row"].value);
    let yMax = Number(form.elements["max_row"].value);

    /* build table */
    let table = document.createElement("table");

    // build header row 
    let array = new Array(xMax - xMin);
    for (let i = 0; i <= xMax - xMin; i++) {
        array[i] = xMin + i;
    }
    let headerRow = rowFromArray(array);

    let td = document.createElement("td");
    let textnode = document.createTextNode("×");
    td.appendChild(textnode);
    headerRow.prepend(td);

    table.appendChild(headerRow);
    
    // build body rows
    for (let y = yMin; y <= yMax; y++) {
        let bodyRow = rowFromArray(array.map((num) => num * y));
        let td = document.createElement("td");
        let textnode = document.createTextNode(y);
        td.appendChild(textnode);
        bodyRow.prepend(td);
        table.appendChild(bodyRow);
    }

    return table;
}