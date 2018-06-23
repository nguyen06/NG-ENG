import {question} from './question.model';

export class Quiz {
    id: number;
    name: string;
    questions: question[];

    constructor(data: any){
        if(data){
            this.id = data.id;
            this.name = data.name;
            this.questions = [];
            data.questions.forEach(element => {
                this.questions.push(new question(element));
            });
        }
    }
}