import {multipleChoice} from './mutipleChoice.model';
export class questions{
    answer: any;
    questionId: string;
    content:string;
    shortAnswer:string;
    multipleChoices : multipleChoice[];
    constructor(data:any){
        if(data){
            
            if(data.answer.length === 0){
                this.answer = [];
            }else{
                this.answer = data.answer;
            }
            this.questionId = data.questionId;
            this.content = data.content;
            this.answer = data.answer;
            this.multipleChoices = [];
            data.multipleChoices.forEach((element) => {
                this.multipleChoices.push(new multipleChoice(element));
            })
        }
    }

}