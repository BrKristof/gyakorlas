/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
*/

import data from "./data.json" with {type:"json"}
import { Manager } from "./manager.js";
import { tbodyRenderRowspan,tbodyRenderColspan } from "./functions.js";
import { Table } from "./table.js";
import { FormController } from "./form.js";

const manager = new Manager()
const table = new Table(data.colspanHeaderArray,manager)

table.setAppendRow((tbody,elem) =>
{
    tbodyRenderColspan(tbody,elem)
})

for(let e of data.colspanDataArr){
    manager.addElement(e)
}

const form = new FormController(data.colspanFormFieldList, manager)