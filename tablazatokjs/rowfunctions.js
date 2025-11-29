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
 */
function createTableRow(tbody,bodyarray){

    const tr = document.createElement('tr')
    tbody.appendChild(tr)

    const td1 = createCell("td",bodyarray.city,tr)
    const td2 = createCell("td",bodyarray.branch1,tr)
    const td3 = createCell("td",bodyarray.branch1ex,tr)

    if(bodyarray.branch2 != undefined && bodyarray.branch2ex != undefined){

        const str = document.createElement('tr')
        tbody.appendChild(str)


        const td4 = createCell("td",bodyarray.branch2,str)
        const td5 = createCell("td",bodyarray.branch2ex,str)

        td1.rowSpan = 2

    }

    
}

/**
 * @param {HTMLTableElement} table
 * @param {tableRow} bodyarray 
 */
function createTableBody(table,bodyarray){

    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    for(const row of bodyarray){

        createTableRow(tbody,row)
    }
    

}

/**
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headarray 
 */
function createTableHead(table,headarray){

    const thead = document.createElement('thead')

    const tr = document.createElement('tr')

    for(const e of headarray){

        const th = createCell("th",e,tr)
    }

    thead.appendChild(tr)
    table.appendChild(thead)
}

/**
 * 
 * @param {string} name 
 * @param {Table} tableDatas 
 */
function createRowTable(name,tableDatas){
    
    const div = document.createElement('div')
    div.id = name

    const table = document.createElement('table')
    

    createTableHead(table,tableDatas.head)
    createTableBody(table,tableDatas.body)


    div.appendChild(table)
    document.body.appendChild(div)
}

//------------------------------------------------------------------------------------------
//checkbox

/**
 * 
 * @param {HTMLElement} checkbox 
 * 
 * @returns {void}
 */
function hideBasedOnCheckbox(checkbox){

    const jsdiv = document.getElementById('jssection')
    const htmldiv = document.getElementById('htmlsection')

    if(checkbox.checked === true){

        htmldiv.classList.add('hide')
        jsdiv.classList.remove('hide')

    }
    else{

        jsdiv.classList.add('hide')
        htmldiv.classList.remove('hide')
    }
}

function changeCheckbox(e){ 

    /**
     * @type {HTMLElement}
     */
    const checkbox = e.target

    hideBasedOnCheckbox(checkbox)

}