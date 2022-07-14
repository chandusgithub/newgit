import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}//for storing selected answers
    correctAnswers=0 //to show correct answers
    isSubmitted=false
    get allNotSelected()

    {
        return !(Object.keys(this.selected).length === this.quizQuestions.length)
    }
    //property name quiz questions which is array of objects
    quizQuestions=[    //property name quiz questions which is array of objects
        {
            id:"Q1",
            question:"what is lwc",
            answers :{
                a:"ligh web comp",
                b:"li we cm",
                c:"lightning web component"
            },
            correctAnswer:"c"
        },
        { 
            id:"Q2",
            question:"what is ivalid file ",
            answers:{
                a:".apex",
                b:".svg",
                c:".js"
            },
            correctAnswer:"a"
        },


      
        {
            id:"Q3",
            question:"js file is used for ",
            answers:{
                a:"structure ",
                b:".design",
                c:".back end functionality"
            },
            correctAnswer:"c"

        },
        {
            id:"Q4",
            question:"looping syntax ",
            answers:{
                a:"for:each ",
                b:"for()",
                c:"for=each"
            },
            correctAnswer:"a"

        }
    ]
    changeHandler(event){
    console.log("name", event.target.name)
    console.log("value", event.target.value)
    const {name,value}=event.target
    //const name=event.target.name
//const value=event.target.value
this.selected={...this.selected, [name]: value}

}
submitHandler(event)
{  event.preventDefault()
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswers:",this.correctAnswers)
}
resetHandler(){
    this.selected ={}
    this.correctAnswers=0
    this.isSubmitted = false
}
}