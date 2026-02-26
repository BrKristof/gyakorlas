/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
*/

class Manager{

    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray

    /**
     * @callback
     * @param {ColspanType[] | RowspanType[]}
     * @returns {void}
     */
    #callback

    constructor(){
        this.#dataArray = []
    }

    /**
     * @callback
     * @param {ColspanType[] | RowspanType[]}
     * @returns {void}
     */
    set addCallback(callback){
        this.#callback = callback
    }

    addElement(elem){
        this.#dataArray.push(elem)
        if(this.#callback){
            this.#callback(elem)
        }
    }
}

export {Manager}