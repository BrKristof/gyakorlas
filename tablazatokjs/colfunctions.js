
/**
 * 
 * @param {"th" | "td"} Celltype 
 * @param {string} cellContent 
 * @param {HTMLTableElement} parentRow 
 * 
 * @returns {HTMLTableCellElement}
 */
function createCell(Celltype,cellContent,parentRow){

    const cell = document.createElement(Celltype)
    cell.innerText = cellContent
    parentRow.appendChild(cell)

    return cell
}

/**
 * 
 * @param {HTMLTableElement} tbody 
 * @param {tableRow} bodyarray 
 * @param {HTMLTableCellElement} th3 
 */
function createRow(tbody,bodyarray,){

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = createCell('td',bodyarray.city,tr)
    const td2 = createCell('td',bodyarray.branch,tr)
    const td3 = createCell('td',bodyarray.branchex,tr)

    if(bodyarray.branchex2 != undefined){

        const td4 = createCell('td',bodyarray.branchex2,tr)
    }
    else{
        td3.colSpan = 2
    }
    
}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {tableRow} bodyarray 
 */
function createTableBody(table,bodyarray){

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    for(const row of bodyarray){

        createRow(tbody,row)
    }
}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headarray 
 * @param {tableRow} bodyarray
 */
function createTableHead(table,headarray,bodyarray){

    const thead = document.createElement('thead')

    const tr = document.createElement('tr')

    const th1 = createCell("th",headarray[0],tr)
    const th2 = createCell("th",headarray[1],tr)
    const th3 = createCell("th",headarray[2],tr)
    if(isThereMoreThan1branchex(bodyarray) == true){
        
        th3.colSpan = 2
    }

    thead.appendChild(tr)
    table.appendChild(thead)
}

/**
 * 
 * @param {string} name 
 * @param {Table} tableDatas 
 */
function createColTable(name,tableDatas){
    
    const table = document.createElement('table')
    table.id = name

    createTableHead(table,tableDatas.head,tableDatas.body)
    createTableBody(table,tableDatas.body)


    document.body.appendChild(table)
}





