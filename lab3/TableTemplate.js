"use strict";
function TableTemplate() {}
TableTemplate.fillIn = function(id, dict, colName) {
    var table = document.getElementById(id);
    var tbody = table.tBodies[0];
    var rowLen = tbody.rows.length;
    var colLen = tbody.rows[0].cells.length;

    var ind = -1;
    for (var r = 0; r < rowLen; r++) {
        var currRow = tbody.rows[r];
        if (!colName) {
            for (var c = 0; c < colLen; c++) {
                var currCell = currRow.cells[c];
                var tp1 = new Cs142TemplateProcessor(currCell.textContent);
                currCell.textContent = tp1.fillIn(dict);
            }
        } else {
            if(r === 0) {
                for(var c1 = 0; c1 < colLen; c1++) {
                    var cell = currRow.cells[c1];
                    var tp2 = new Cs142TemplateProcessor(cell.textContent);
                    cell.textContent = tp2.fillIn(dict);
                    if(cell.textContent === colName) { ind = c1; }
                }                
            } else {
                    var thisCell = currRow.cells[ind];
                    var tp3 = new Cs142TemplateProcessor(thisCell.textContent);
                    thisCell.textContent = tp3.fillIn(dict);
            }
        }
    }
    table.style.visibility = "visible";
};