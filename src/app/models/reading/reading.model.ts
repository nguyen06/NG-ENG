export class readingModel {
    id: number;
    title: string;
    content: string;
    audio: string;
    constructor(data: any){
            this.id = data.healthId;
            this.title = data.title;
            this.audio = data.audio;
            this.content = data.content;
        
    }
}