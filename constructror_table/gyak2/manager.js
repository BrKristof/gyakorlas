/**
 * @import {FormFieldType,HeaderArrayType, ColspanType, RowspanType} from "./functions.js"
 */

class Manager{

    /**
     * @type {ColspanType[] || RowspanType[]}
     */
    #dataArray

    /**
     * @callback
     * @param {ColspanType[] || RowspanType[]}
     * @returns {void}
     */
    #addCallback

    constructor(){

        this.#dataArray = [];
    }


    /**
     * @callback
     * @param {ColspanType[] || RowspanType[]} 
     * @returns {void}
     */
    set callAFunction(callback){
        this.#addCallback = callback
    }

    /**
     * 
     * @param {ColspanType || RowspanType} elem 
     */
    addelement(elem){

        this.#dataArray.push(elem)
        if(this.#addCallback){
            this.#addCallback(elem)
        }
    }
}

export {Manager}