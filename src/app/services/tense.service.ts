import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TenseService {

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(url);
  }

  getAll() {
    return [
      {name: "Present Simple", content: "assets/data/PresentSimple.json"}
    ]
  }
}
