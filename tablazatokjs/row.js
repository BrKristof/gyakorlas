/**
 * @typedef {{city:string,branch1:string,branch1ex:string,branch2?:string,branch2ex?:string}} tableRow
 * 
 * @typedef {{head:string[],body:tableRow[]}} Table
 */

/**
 * @type {Table}
 */
const table ={
    head: ["Ókori település","Ágazat","Példa"],
    body: [
        {
            city: "Athén",
            branch1: "politika",
            branch1ex: "demokrácia", 
            branch2: "tudomány",
            branch2ex: "filozófia"

        },
        {
            city: "Egyiptom  ",
            branch1: "mezőgazdaság",
            branch1ex: "csatornák",
        },
        {
            city: "Spárta",
            branch1: "neveléstudomány",
            branch1ex: "agogé",
            branch2: "harcászat",
            branch2ex: "hoplita",
        }
    ]
}

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
function createTable(name,tableDatas){
    
    const table = document.createElement('table')
    table.id = name

    createTableHead(table,tableDatas.head)
    createTableBody(table,tableDatas.body)


    document.body.appendChild(table)
}

createTable("test",table)