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