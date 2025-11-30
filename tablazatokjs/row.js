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


createRowTable("jssection",table)

const jsdiv = document.getElementById('jssection')
jsdiv.classList.add("hide")

/*const tablecheck = document.getElementById('tableselector')
hideBasedOnCheckbox(tablecheck)
tablecheck.addEventListener('change',changeCheckbox)*/


const htmlDropdown = document.getElementById('htmldropdownlist')
hideBasedOnDropdown(htmlDropdown)
htmlDropdown.addEventListener('change',changeDropdowlist)

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

/**
 * @returns {void}
 */
function writeError(){

    const h2 = document.createElement('h2')
    h2.innerText = 'jelenleg nincs táblázat kiválasztva'

    document.body.appendChild(h2)
}



