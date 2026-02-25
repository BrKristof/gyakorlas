/**
 * @import {FormFieldType,HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

import { createTableCell } from "./functions.js";
import { Manager } from "./manager.js";

class Table{

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    /**
     * 
     * @param {ColspanType[] || RowspanType[]} headArray 
     * @param {Manager} manager 
     */
    constructor(headArray,manager){

        this.#manager = manager

        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        const tr = document.createElement('tr')
        tr.appendChild(thead)

        for(let e of headArray){

            const th = createTableCell('th',e,tr)
            if(e.colspan){
                th.colSpan = e.colspan
            }
            tr.appendChild(th)

        }

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        this.#tbody = tbody

    }

    /**
     * @callback
     * @param {HTMLTableSectionElement} tbody
     * @param {ColspanType[] || RowspanType[]} element 
     * @returns {void}
     */
    setAppendRowType(tablecallback){
        this.#manager.callAFunction = (element) =>
        {
            tablecallback(this.#tbody, element)
        }
    }
}

export {Table}