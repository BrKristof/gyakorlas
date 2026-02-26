/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

import { Manager } from "./manager.js";
import { createTableCell,createTable } from "./functions.js";

class Table{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    
    constructor(headArraay,manager){
        this.#manager = manager
        const tbody = createTable(document.body,
            (tr) => {
                for(const e of headArraay){
                    const th = createTableCell('th',e.name,tr)
                    if(e.colspan){
                        th.colSpan = e.colSpan
                    }
                }
            }
        )

        this.#tbody = tbody
    }

    /**
     * 
     * @callback
     * @param {HTMLTableSectionElement}
     * @param {ColspanType[] | RowspanType[]}
     * @returns {void}
     */
    setAppendRow(tablecallback){
        this.#manager.addManagerCallback = (elem) => {
            tablecallback(this.#tbody,elem)
        }
    }
}

export {Table}