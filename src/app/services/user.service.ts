import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<User[]>('/users/users');
  }

  getById(id: number){
    return this.http.get('./users/users/'+ id);
  }

  create(user: User){
    return this.http.post('/users/register', user);
  }
  update(user: User){
    return this.http.put('/user/users'+ user.id, user);
  }
  delete(id: number){
    return this.http.delete('/users/users/'+ id);
  }

}
