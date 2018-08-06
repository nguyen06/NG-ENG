import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class authenticationService {
  constructor(private http: HttpClient){}

  login(username: string, password: string){
    return this.http.post<any>('https://pure-tor-72835.herokuapp.com/users/login', {
      username: username,
      password: password
    }).pipe(map(user => {
      if(user.status === 'false'){
        return user;
      }
      else if(user && user.message.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
      
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}