import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStatements() {
    return this.http.get('https://angular-quiz-interview.rj.r.appspot.com/api/questions');
  }
}
