import { LightningElement } from 'lwc';

export default class LifeCycle extends LightningElement {
    constructor(){
        super()
        console.log("constr called")
    }
        connectedCallback(){
            console.log("parent connected called")
       
    }
}