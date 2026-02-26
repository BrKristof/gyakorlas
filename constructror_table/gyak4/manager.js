/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

class Manager{

    /**
     * @type {ColspanType[] || ColspanType[]}
     */
    #dataArray

    /**
     * @callback
     * @param {ColspanType[] || ColspanType[]}
     * @returns {void}
     */
    #addCallback

    constructor(){
        this.#dataArray = []
    }

    /**
     * @callback
     * @param {ColspanType[] || ColspanType[]}
     * @returns {void}
     */
    set setManagerCallback(callback){
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