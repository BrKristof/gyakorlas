/**
 * @import {FormFieldType,HeaderArrayType,ColspanType,RowspanType} from "./functions.js"
 */

import { Manager } from "./manager.js";
import { createInputField,createForm } from "./functions.js";

class FormController{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {}
     */
    #formfieldList

    constructor(formFieldLsist,manager){
        this.#manager = manager
        this.#formfieldList = []
        const form = createForm(
            (form) => {
                for(let f of formFieldLsist){
                    const fieldElem = new FormField(f.id,f.name,f.label,f.required,form)
                    this.#formfieldList.push(fieldElem)
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
        
        for(const input of this.#formfieldList){
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

    constructor(id,name,label,required,parent){

        const {input, errorElement} = createInputField({id,name,labelContent: label, parent})

        this.#error = errorElement
        this.#input = input
        this.#name = name
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
            this.#error.innerText = "kötelező"
            result = false
        }
        else{
            this.#error.innerText = ""
        }
        return result
    }
}

export {FormController}