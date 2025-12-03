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


const formfields = [
    {
        id: "city",
        content:"Ókori települé",
    },
    {
        id:"branch1",
        content:"Ágazat",
    },
    {
        id:"branch2",
        content:"Ágazat",
    },
    {
        id:"branchex1",
        content:"Példa",
    },
    {
        id:"branchex2",
        content:"Példa",
    }
]

createRowTable("jssection",table)

const jsdiv = document.getElementById('jssection')
jsdiv.classList.add("hide")

/*const tablecheck = document.getElementById('tableselector')
hideBasedOnCheckbox(tablecheck)
tablecheck.addEventListener('change',changeCheckbox)*/

const htmlDropdown = document.getElementById('htmldropdownlist')
hideBasedOnDropdown(htmlDropdown)
htmlDropdown.addEventListener('change',changeDropdowlist)


const form = createForm('jsform',formfields)
jsdiv.appendChild(form)

// eventlistener

const htmlform = document.getElementById('htmlform')
htmlform.addEventListener('submit',function(e){

    e.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const htmlform = e.target

    /**
     * @type {HTMLInputElement}
     */
    const city = document.getElementById('city')
        /**
     * @type {HTMLInputElement}
     */
    const branch1 = document.getElementById('branch1')
        /**
     * @type {HTMLInputElement}
     */
    const branchex1 = document.getElementById('branchex1')
        /**
     * @type {HTMLInputElement}
     */
    const branchex2 = document.getElementById('branchex2')

    /**
     * @type {string}
     */
    const cityValue = city.value
        /**
     * @type {string}
     */
    const branch1Value = branch1.value
        /**
     * @type {string}
     */
    const branchex1Value = branchex1.value
        /**
     * @type {string}
     */
    const branch2exValue = branchex2.value

    /**
     * @type {{city:string,branch1:string,branch1ex:string,branch2ex?:string}}
     */
    const htmlObj = {}

    console.log(htmlObj)

    htmlObj.city = cityValue
    htmlObj.branch1 = branch1Value
    htmlObj.branch1ex = branchex1Value
    htmlObj.branch2ex = branch2exValue

    const htmlbody = document.getElementById('htmlbody')

    createColRow(htmlbody,htmlObj)



})



const jsform = document.getElementById('jsform')
jsform.addEventListener('submit',function(e){

    e.preventDefault()

    /**
     * @type {HTMLFormElement}
     */
    const jsform = e.target

    /**
     * @type {HTMLInputElement}
     */
    const city = jsform.querySelector('#city')
    /**
     * @type {HTMLInputElement}
     */
    const branch1 = jsform.querySelector('#branch1')
    /**
     * @type {HTMLInputElement}
     */
    const branch1ex = jsform.querySelector('#branchex1')
    /**
     * @type {HTMLInputElement}
     */
    const branch2 = jsform.querySelector('#branch2')
    /**
     * @type {HTMLInputElement}
     */
    const branch2ex = jsform.querySelector('#branchex2')
    

    /**
     * @type {string}
     */
    const cityValue = city.value
    /**
     * @type {string}
     */
    const branch1Value = branch1.value
    /**
     * @type {string}
     */
    const branch1exValue = branch1ex.value
    /**
     * @type {string}
     */
    const branch2Value = branch2.value
    /**
     * @type {string}
     */
    const branch2exValue = branch2ex.value

    /**
     * @type {tableRow[]}
     */
    const jsObj = {}

    jsObj.city = cityValue
    jsObj.branch1 = branch1Value
    jsObj.branch2 = branch2Value
    jsObj.branch1ex = branch1exValue
    jsObj.branch2ex = branch2exValue

    console.log(cityValue)
    console.log(branch1Value)
    console.log(branch2Value)
    console.log(branch1exValue)
    console.log(branch2exValue)

    table.body.push(jsObj)

    const jsbody = document.getElementById('jsbody')

    createTableBody(table.body)



    
})

