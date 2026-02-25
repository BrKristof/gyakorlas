import { createForm, createInputField } from "./functions.js";
import { Manager } from "./manager.js";

class FormController{

    /**
     * @type {Manager}
     */
    #manager

    /**
     * @type {FormField}
     */
    #formfieldElemList

    constructor(formfields, manager){
        this.#manager = manager
        this.#formfieldElemList = []
        const form = createForm(this.formFieldCallBack, this.#eventListener)
        
        
    }

    formFieldCallBack(form){
        
        for(let formfield of formfields){
            const formfieldElem = new FormField(formfield.id, formfield.label, formfield.name, formfield.required, form )
            this.#formfieldElemList.push(formfieldElem)
        }

    }

    #eventListener(e){
        e.preventDefault()

        const elem = this.#createElem()
        if(elem){
            this.#manager.addelement(elem)
            e.target.reset()
        }
    }

    #createElem(){
        let result = []
        let valid = true
        for(const input of this.#formfieldElemList){
        
            if(input.validate()){
                result[input.name] = input.value
            }
            else{
                valid = false
            }
        }
        
        return result
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
     * @type {HTMLDivElement}
     */
    #error
    /**
     * @type {boolean}
     */
    #required

    get value(){
        return this.#input.value ? this.#input : undefined
    }

    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent){

        
        const data = createInputField(id,name, label,parent)
        const input = data[0]
        const errorDiv = data[1]

        this.#input = input
        this.#name = name
        this.#error = errorDiv

        this.#required = required


    }

    validate(){
        let result = true
        if(this.#required && !this.#input.value){
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