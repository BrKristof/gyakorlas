/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} "./functions.js"
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
        this.#dataArray = []
    }

    /**
     * @callback
     * @param {ColspanType[] || RowspanType[]}
     * @returns {void}
     */
    set addCallbackToManager(callback){
        this.#addCallback = callback
    }

    /**
     * 
     * @param {ColspanType || RowspanType} elem 
     */
    addElement(elem){
        
        this.#dataArray.push(elem)
        if(this.#addCallback){
            this.#addCallback(elem)
        }
    }

}

export {Manager}