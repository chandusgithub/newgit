import { LightningElement,track } from 'lwc';

export default class Calculator extends LightningElement {
    @track num1;
    @track num2;
    resultValue;
    handleChangenum1(event)
    {
        this.num1=parseInt(event.target.value);
    }
    handleChangenum2(event)
    {
        this.num2=parseInt(event.target.value);
    }
    handleClickSum(){
        this.resultValue= parseInt(this.num1)+parseInt(this.num2);

    }
    handleClickSub(){
        this.resultValue= this.num1-this.num2;

    }
    handleClickMul(){
        this.resultValue= this.num1*this.num2;

    }
    handleClickDiv(){
        this.resultValue= this.num1/this.num2;

    }
    
}