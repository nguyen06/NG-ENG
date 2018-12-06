import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  
  hardCodeArr = [];
  categoryName: string;

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(url);
  }

  getCategories(levelId){
    return this.http.post<any>('http://localhost:3000/categories/category',{
      levelId: levelId
    }).pipe(map(result => {
      if(result.status === "error" || result.status === "false"){
        return []
      }else{
        return result.response;
      }
    }))
  };

  getCategoryName(categoryId: string){
    this.get(categoryId).subscribe((res: any) => {
      
        this.hardCodeArr = res.content;
    })
  }

  getLessonService(lessonId:string){
    return this.http.post<any>('http://localhost:3000/lesson/getLesson',{
      lessonId
    }).pipe(map(result => {
      let res = {...result};
      return res;
    }))
  }
  getMenu(cate: string, studentId: String){
    //return this.http.post<any>('https://pure-tor-72835.herokuapp.com/lessons/category', {
    return this.http.post<any>('http://localhost:3000/lessons/getLessons',{
      categoryId: cate,
      studentId: studentId
    }).pipe(map(result => {
      let responseArr = [];
      let response =[...result.response] ;
      
      for(let i =0; i< response.length; i++){
        if(response[i].grades.length === 0){
          
          let obj = {
            orderNum: i,
            categoryId: response[i].categoryId,
            title: response[i].title,
            lessonId: response[i].lessonId,
            grade: '0%'
          }
          responseArr.push(obj);
        }else{
          
          let obj = {
            orderNum: i,
            categoryId: response[i].categoryId,
            title: response[i].title,
            lessonId: response[i].lessonId,
            grade: response[i].grades[response[i].grades.length - 1] + '%'
          }
          responseArr.push(obj);
        }
      }
      return responseArr;
      
    }));
  }
}
