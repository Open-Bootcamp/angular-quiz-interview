import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getTechnologies() {
    return this.http.get('https://angular-quiz-interview.rj.r.appspot.com/api/technologies');
  }
  
  getStatements(idTech: string) {
    return this.http.get('https://angular-quiz-interview.rj.r.appspot.com/api/questions/' + idTech + '/technology');
  }

}
