import data from "./data.json" with {type:'json'}
import { FormController } from "./form.js";
import { Table } from "./table.js";
import { Manager } from "./manager.js";
import { tbodyRenderColspan, tbodyRenderRowspan } from "./functions.js";



const manager = new Manager()
const table = new Table(data.colspanDataArr,manager)


table.setAppendRowType((tbody,elem) => {
    tbodyRenderColspan(tbody,elem)
})

for(let a of data.colspanDataArr){
    manager.addelement(a)
}

const formcontroller = new FormController(data.colspanFormFieldList,manager)

const manager2 = new Manager()
const table2 = new Table(data.colspanDataArr,manager2)


table2.setAppendRowType((tbody,elem) => {
    tbodyRenderRowspan(tbody,elem)
})

for(let a of data.rowspanTableArray){
    manager2.addelement(a)
}

const formcontroller2 = new FormController(data.rowspanFormFieldList,manager2)