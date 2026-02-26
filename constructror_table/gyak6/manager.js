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
    #addCallback

    constructor(){
        this.#dataArray = []
    }

    set addManagerCallback(callback){
        this.#addCallback = callback
    }

    addElement(elem){
        this.#dataArray.push(elem)
        if(this.#addCallback){
            this.#addCallback(elem)
        }
    }

}

export {Manager}