import { category } from './category.model';
export class categories {
    name: string;
    response: category[];
    constructor(data: any){
        if(data){
            this.name = data.name;
            this.response = [];
            data.forEach(element => {
                this.response.push(new category(element));
            })
        }

    }
}