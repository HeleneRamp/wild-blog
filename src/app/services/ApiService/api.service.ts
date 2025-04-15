import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080';

  private http = inject(HttpClient);

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(`${this.apiUrl}/articles`);
}

getArticleById(id: number): Observable<Article> {
  return this.http.get<Article>(`${this.apiUrl}/articles/${id}`)
}
}
