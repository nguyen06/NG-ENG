import { category } from './category.model';
export class categories {
    title: string;
    content: category[];
    constructor(data: any){
        if(data){
            this.title = data.title;
            this.content = [];
            data.content.forEach(element => {
                this.content.push(new category(element));
            })
        }

    }
}