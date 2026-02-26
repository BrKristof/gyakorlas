/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

import { Manager } from "./manager.js";
import {createInputField,createForm} from "./functions.js"

class FormController{

    /**
     * @type {Manager}
     */
    #manager 

    /**
     * @type {FormField}
     */
    #formFieldList

    /**
     * 
     * @param {FormFieldType[]} formFieldList 
     * @param {Manager} manager 
     */
    constructor(formFieldList,manager){
        this.#manager = manager
        this.#formFieldList = []
        const form = createForm(
            (form) => {
                for(let e of formFieldList){
                    const fieldElem = new FormField(e.id,e.name,e.label,e.required,form)
                    this.#formFieldList.push(fieldElem)
                }
            },
            (e) => {
                e.preventDefault()

                const elem = this.#createElem()
                if(elem){
                    this.#manager.addElement(elem)
                    e.target.reset()
                }


            }

        )
        document.body.appendChild(form)
    }

    #createElem(){
        let result = []
        let valid = true
        for(const input of this.#formFieldList){

            if(input.validate()){
                result[input.name] = input.value
            }
            else{
                valid = false
            }


        }
        
        if(valid){
            return result
        }
        else{
            return null
        }
    }

}

class FormField{
    
    /**
     * @type {HTMLInputElement}
     */
    #input
    /**
     * @type {string}
     */
    #name
    /**
     * @type {boolean}
     */
    #required
    /**
     * @type {HTMLDivElement}
     */
    #error

    constructor(id,name,label,required, parent){

        const {input , errorElement} = createInputField({id,name,labelContent: label, parent})

        this.#name = name
        this.#input = input
        this.#error = errorElement
        this.#required = required
    }

    get value(){
        return this.#input.value ? this.#input.value : undefined
    }

    get name(){
        return this.#name
    }

    validate(){
        let result = true
        if(this.#required && !this.value){
            this.#error.innerText = "Kötelező"
            result = false
        }
        else{
            this.#error.innerText = ""
        }
        return result
    }
}

export {FormController}