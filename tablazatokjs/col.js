/**
 * @typedef {{city:string,branch:string,branchex:string,branchex2?:string}} tableRow
 * 
 * @typedef {{head:string[],body:tableRow[]}} Table
 */

/**
 * @type {Table}
 */
const table = {
    head:["Ókori település","Ágazat","Példa"],
    body:[
        {
            city:"Athén",
            branch:"politika",
            branchex:"demokrácia",
        },
        {
            city:"Athén",
            branch:"tudomány",
            branchex:"filozófia",  
        },
        {
            city:"Egyiptom",
            branch:"mezőgazdaság",
            branchex:"csatornák",
            branchex2:"gátak",
        },
        {
            city:"Spárta",
            branch:"neveléstudomány",
            branchex:"agogé",  
        },
        {
            city:"Spárta",
            branch:"harcászat",
            branchex:"hoplita",
            branchex2:"phalanx",
        }
    ]
}



createTable('jssection',table)