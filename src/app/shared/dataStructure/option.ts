export class option{
    id: number;
    content: string;
    isAnswer: boolean;

    constructor(data: any){
        this.id = data.id;
        this.content = data.content;
        this.isAnswer = data.isAnswer;
    }
}