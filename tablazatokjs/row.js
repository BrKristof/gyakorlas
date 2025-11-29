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

const tablecheck = document.getElementById('tableselector')
hideBasedOnCheckbox(tablecheck)
tablecheck.addEventListener('change',changeCheckbox)






