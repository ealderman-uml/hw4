/* Ed Alderman
 * This class leverages an array to build a multiplication table.
 * It exposes a funciont for building and populating a table element with these values.
 */

class MultiplicationTableBuilder {
    xMin;
    xMax;
    yMin;
    yMax;

    constructor(xMin, xMax, yMin, yMax) {
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
    }

    #rowFromArray(array) {
        let row = document.createElement("tr");
    
        for (let i = 0; i < array.length; i++) {
            let td = document.createElement("td");
            let textnode = document.createTextNode(array[i]);
            td.appendChild(textnode);
            row.appendChild(td);
        }
    
        return row;
    }

    build_table() {    
        /* build table */
        let table = document.createElement("table");
    
        // build header row 
        let xRange = this.xMax - this.xMin;
        let array = new Array(xRange);
        for (let i = 0; i <= xRange; i++) {
            array[i] = parseInt(this.xMin) + parseInt(i);   // <- dynamic typing sucks
        }
        let headerRow = this.#rowFromArray(array);
    
        let td = document.createElement("td");
        let textnode = document.createTextNode("×");
        td.appendChild(textnode);
        headerRow.prepend(td);
    
        table.appendChild(headerRow);
        
        // build body rows
        for (let y = this.yMin; y <= this.yMax; y++) {
            let bodyRow = this.#rowFromArray(array.map((num) => num * y));
            let td = document.createElement("td");
            let textnode = document.createTextNode(y);
            td.appendChild(textnode);
            bodyRow.prepend(td);
            table.appendChild(bodyRow);
        }
    
        return table;
    }
}