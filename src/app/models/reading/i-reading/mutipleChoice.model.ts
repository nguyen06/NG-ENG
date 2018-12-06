export class multipleChoice{
    id:string;
    content:string;
    answer: boolean;
    constructor(data:any){
        if(data){
            
            this.id = data.id;
            this.content = data.content;
            this.answer = data.answer;
        }

    }
}