import { questions } from './questions.model';
export class oneLesson {
    lessonId: string;
    categoryId: string;
    title: string;
    content:string;
    audioUrl:string;
    questions: questions[];
    constructor(data:any) {
        if(data){
            this.lessonId = data.lessonId;
            this.categoryId = data.categoryId;
            this.title = data.title;
            this.content = data.content;
            this.audioUrl = data.audioUrl;
            this.questions = [];
            data.questions.forEach(element => {
                
                this.questions.push(new questions(element));
            });
        }
    }
}