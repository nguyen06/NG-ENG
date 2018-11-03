export class category{
    id: string;
    src_img: string;
    title: string;
    constructor(data: any){
        this.id = data.id;
        this.src_img = data.src_img;
        this.title = data.title;
    }
}