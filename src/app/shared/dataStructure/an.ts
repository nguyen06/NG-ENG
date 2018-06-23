export class answer {
    corrected: boolean;
    option_id: number;
    hindUrl: string;

    constructor(data:any){
        this.corrected = data.corrected;
        this.hindUrl = data.hindUrl;
        this.option_id = data.option_id || 0;
    }
}