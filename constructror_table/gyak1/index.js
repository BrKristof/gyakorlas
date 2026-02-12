/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 * 
 * @import {callbackType} from "./manager.js"
 */

import data from "./data.json" with {type:'json'}
import { Table } from "./table.js"
import { Manager } from "./manager.js"


const manager = new Manager()
/**
 * 
 * @param {callbackType} element 
 */
manager.addCallback = (element) => (console.log(element))



for(let e of data.colspanDataArr){
    manager.addElement(e)

}

const table = new Table(data.colspanHeaderArray,manager)

