/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
*/

import { Manager } from "./manager.js";
import { createTable,createTableCell } from "./functions.js";

class Table{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody 

    constructor(headArray,manager){

        this.#manager = manager
        const tbody = createTable(document.body,
            (tr) => {
                for(let a of headArray){
                    const th = createTableCell('th',a.name,tr)
                    if(a.colSpan){
                        th.colSpan = a.colSpan
                    }
                }
            }
        )

        this.#tbody = tbody
    }

    setAppendRow(callback){
        this.#manager.addCallback = (elem) =>{
            callback(this.#tbody,elem)

        }

    }
}

export {Table}