export class category{
    levelId: string;
    categoryId:string;
    categoryName:string;
    src_img: string;
    constructor(data: any){
        this.levelId = data.levelId;
        this.categoryId = data.categoryId;
        this.categoryName = data.categoryName;
        this.src_img = data.src_img;
    }
}