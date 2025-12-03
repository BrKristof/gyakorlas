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
function createTableBody(bodyarray){

    const tbody = document.createElement('tbody')
    tbody.id = 'jsbody'
    tbody.innerHTML = ""

    for(const row of bodyarray){

        createTableRow(tbody,row)
    }

    return tbody
    

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
    const body = createTableBody(tableDatas.body)


    table.appendChild(body)
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

//------------------------------------------------------------------------------------------
//dropdownlist
/**
 * 
 * @param {HTMLSelectElement} dropdownlist 
 * 
 * 
 * @returns {void}
 */
function hideBasedOnDropdown(dropdownlist){

    const value = dropdownlist.value

    const jsdiv = document.getElementById('jssection')
    const htmldiv = document.getElementById('htmlsection')

    if(value == 'row'){

        jsdiv.classList.remove('hide')
        htmldiv.classList.add('hide')
    }
    else if(value == 'col'){

        htmldiv.classList.remove('hide')
        jsdiv.classList.add('hide')
    }
    else{
        jsdiv.classList.add('hide')
        htmldiv.classList.add('hide')
        writeError()
    }


    
}

/**
 * 
 * @param {event} e
 * 
 * 
 * @returns {void} 
 */
function changeDropdowlist(e){

    /**
     * @type {HTMLSelectElement}
     */
    const dropdownlist = e.target

    hideBasedOnDropdown(dropdownlist)
}


//------------------------------------------------------------------------------------------
//form
/**
 * 
 * @param {string} content 
 * @param {string} id 
 * @param {HTMLFormElement} appendTo 
 */
function createInputDiv(content,id,appendTo){
    
    const div = document.createElement('div')

    const label = document.createElement('label')
    const input = document.createElement('input')

    label.htmlFor = id
    label.innerText = content
    input.id = id
    input.name = id

    const span = document.createElement('span')
    span.classList.add('error')

    const br = document.createElement('break')

    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(span)
    div.appendChild(br)

    appendTo.appendChild(div)
    
    
}

/**
 * 
 * @param {string} id 
 * @param {string[]} fields 
 * 
 * 
 * @returns {HTMLFormElement}
 */
function createForm(id,fields){

    const form = document.createElement('form')
    form.id = id

    for(const f of fields){
        
        createInputDiv(f.content,f.id,form)
    }

    const button = document.createElement('button')
    button.innerText = "hozzáad"
    form.appendChild(button)

    return form
}

//------------------------------------------------------------------------------------------
//egyéb methodok
/**
 * 
 * @param {HTMLTableElement} body 
 * @param {string[]} array 
 */
function createColRow(body,array){

    const tr = document.createElement('tr')
    

    const td1 = createCell('td',array.city,tr)
    const td2 = createCell('td',array.branch1,tr)

    if(array.branch2ex != "" && array.branch2ex != undefined){

        const td3 = createCell('td',array.branch1ex,tr)
        const td4 = createCell('td',array.branch2ex,tr)
        
    }
    else{
        const td3 = createCell('td',array.branch1ex,tr)
        td3.colSpan = 2
    }


    body.appendChild(tr)

}

/**
 * @returns {void}
 */
function writeError(){

    const h2 = document.createElement('h2')
    h2.innerText = 'jelenleg nincs táblázat kiválasztva'

    document.body.appendChild(h2)
}