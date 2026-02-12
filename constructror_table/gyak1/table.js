import data from "./data.json" with {type:"json"}
import { Manager } from "./manager.js"
/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

class Table{

    /**
     * @type {HTMLTableElement}
     */
    #tbody

    /**
     * @type {Manager}
     */
    #manager

    constructor(dataArray,manager){

        const table = document.createElement('table')
        document.body.appendChild(table)
        const thead = document.createElement('thead')
        table.appendChild(thead)
        const tr = document.createElement('tr')
        thead.appendChild(tr)

        for(let e of dataArray){
            
            const th = document.createElement('th')
            th.innerText = e.name
            if(e.colspan){
                th.colSpan = e.colSpan
            }
            tr.appendChild(th)
        }

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        this.#tbody = tbody

    }
}

export {Table}
