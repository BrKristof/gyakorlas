/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

import { Manager } from "./manager.js";
import {createTableCell,createTable} from "./functions.js"

class Table{

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    constructor(headArray,manager){
        this.#manager = manager

        const tbody = createTable(document.body,
            (tr) => {
                for(let e of headArray){
                    const th = createTableCell("th",e.name,tr)
                    if(e.colSpan){
                        th.colSpan = e.colSpan
                    }
                }
            }
        )

        this.#tbody = tbody
    }

    /**
     * @callback
     * @param {ColspanType[] || ColspanType[]}
     * @returns {void}
     */
    setAppendRow(callback){
        this.#manager.setManagerCallback = (elem) => {

            callback(this.#tbody, elem)
        }
    }
}

export {Table}