/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} "./functions.js"
 */

import { Manager } from "./manager.js";
import {createTableCell, createTable} from "./functions.js"

class Table{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody

    /**
     * 
     * @param {ColspanType[] || RowspanType[]} headArray 
     * @param {Manager} manager 
     */
    constructor(headArray, manager){

        this.#manager = manager

        const tbody = createTable(document.body,(tr) =>{
            for(const e of headArray){
                const th = createTableCell("th",e.name,tr)
                if(e.colSpan){
                    th.colSpan = e.colSpan
                }
                console.log(e)
            }
        })

        this.#tbody = tbody
    }

    /**
     * @callback
     * @param {HTMLTableSectionElement}
     * @param {ColspanType[] || RowspanType[]}
     * @returns {void}
     * 
     */
    setAppendRowType(tableCallback){
        this.#manager.addCallbackToManager = (elem) => {
            tableCallback(this.#tbody, elem)
        }
    }

}

export {Table}