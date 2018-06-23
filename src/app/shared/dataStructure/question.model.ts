import {option} from './option';
import { Options } from 'selenium-webdriver/opera';
import { answer } from './an';
export class question{
    id: number;
    content: string;
    isVisited: boolean;
    answered: answer;
    options: option[];

    constructor(data: any){
        this.id = data.id;
        this.content = data.content;
        this.isVisited = data.isVisited;
        this.options = [];
        data.options.forEach(op => {
            this.options.push(new option(op));
        });
        this.answered = data.answered || null;
            
    }
}