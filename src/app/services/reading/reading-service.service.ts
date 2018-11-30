import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(url);
  }

  getMenu(cate: string){
    return this.http.post<any>('https://pure-tor-72835.herokuapp.com/menu/category', {
      category: cate
    }).pipe(map(result => {
      if(result.status === 'not found'){
        return [];
      }else if(result.status === 'ok'){
        let responseArr = [];
        for(let element of result.response){
          if(element.category === cate){
            responseArr.push(element);
          }
        }
        return responseArr;
      }
    }));
  }
}
