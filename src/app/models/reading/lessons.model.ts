import { readingModel } from './reading.model';

export class readingLessons {
    name: string;
    title: string;
    lessons: readingModel[];
    constructor(data: any){
        debugger;
        if(data){
            this.name = data.name;
            this.title = data.title;
            this.lessons = [];
            data.lessons.forEach(el => {
                this.lessons.push(new readingModel(el));
            })
        }
    }
}