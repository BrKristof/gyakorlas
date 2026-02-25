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
        const form = createForm(
            (form) => {
                for(let formfield of formfields){
                    const formfieldElem = new FormField(formfield.id,formfield.label,formfield.name, formfield.required, form)
                    console.log(formfield.label)
                    this.#formfieldElemList.push(formfieldElem)
                }
            },
            (e) => {
                e.preventDefault()

                const elem = this.#createElem()
                if(elem){
                    this.#manager.addelement(elem)
                    e.target.reset()
                }
            }
                
        )
        document.body.appendChild(form)
        
        
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
     * @type {HTMLDivElement}
     */
    #error
    /**
     * @type {boolean}
     */
    #required


    /**
     * 
     * @param {string} id 
     * @param {string} label 
     * @param {string} name 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(id, label, name, required, parent){

        
        const {input, errorElement} = createInputField({id, name, labelContent: label, parent})
        
        this.#input = input
        this.#name = name
        this.#error = errorElement
        this.label = label
        this.#required = required

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

    get value() {
        return this.#input.value ? this.#input.value : undefined;
    }

    get name() {
        return this.#name;
    }

}

export {FormController}