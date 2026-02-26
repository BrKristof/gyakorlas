/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} "./functions.js"
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

    constructor(formFieldList,manager){
        this.#manager = manager
        this.#formFieldList = []
        const form = createForm(
            (form) => {
                for(let e of formFieldList){
                    const formfield = new FormField(e.id,e.label,e.name,e.required,form)
                    this.#formFieldList.push(formfield)
                }
            },
            (e) => {
                e.preventDefault()

                const elem = this.#createElem()
                if(elem){
                    console.log(elem)
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

    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {string} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id,label,name,required,parent){
         
        const {input, errorElement} = createInputField({id,name,labelContent: label,parent})
        this.#required = required
        this.#input = input
        this.#error = errorElement
        this.#name = name
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
            this.#error.innerText = "Mező kitöltése kötelező"
            result = false
        }
        else{
            this.#error.innerText = ""
        }
        return result
    }
}

export {FormController}