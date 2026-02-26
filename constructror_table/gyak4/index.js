/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

import data from "./data.json" with {type:"json"}
import { Manager } from "./manager.js";
import { Table } from "./table.js";
import {tbodyRenderRowspan,tbodyRenderColspan} from "./functions.js"
import { FormController } from "./form.js";

const manager = new Manager()
const table = new Table(data.colspanHeaderArray,manager)

table.setAppendRow((tbody,elem) =>{
    tbodyRenderColspan(tbody,elem)
})

for(let a of data.colspanDataArr){
    manager.addElement(a)
}

const controller = new FormController(data.colspanFormFieldList,manager)


