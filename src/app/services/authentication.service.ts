import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class authenticationService {
  constructor(private http: HttpClient){}

  login(username: string, password: string){
    //return this.http.post<any>('https://pure-tor-72835.herokuapp.com/users/login', {
      return this.http.post<any>('http://localhost:3000/users/login',{
      username: username,
      password: password
    }).pipe(map(user => {
      if(user.status === 'false'){
        return user;
      }
      else if(user && user.message.token){
        debugger;
        localStorage.setItem('currentUser', user.message.studentId);
      }
      return user;
      
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}