/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 * 
 * 
 * @callback callbackType
 * @param {(ColspanType[] | RowspanType[])} callback 
 * @returns {void}
 */

class Manager{

    /**
     * @type {callbackType}
     */
    #addcallback

    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray

    
    constructor(){

        this.#dataArray = []
    }

    /**
     * 
     * @param {ColspanType[] | RowspanType[]} element 
     */
    addElement(element){
        this.#dataArray.push(element)
        if(this.#addcallback){
            this.#addcallback(element)
        }
    }

    /**
     * 
     * @param {callbackType} callback 
     */
    set addCallback(callback){
        this.#addcallback = callback
    }
}

export {Manager}