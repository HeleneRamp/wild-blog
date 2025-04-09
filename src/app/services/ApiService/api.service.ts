import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private apiUrl = 'http://localhost:3000/articles';
  private apiUrl = 'http://localhost:8080/articles';

  private http = inject(HttpClient);

/*getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.apiUrl);
}*/

getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(this.apiUrl);
}

//avec subscribe (la partie . subscribe à ajouter dans le composant directement)

// getArticleSubscribe(){
//   return this.http.get<Article[]>(this.apiUrl).subscribe((data) => {
//     this.articles = data; 
//   });
// }

getArticleById(id: number): Observable<Article> {
  return this.http.get<Article>(`${this.apiUrl}/${id}`)
  // return this.http.get<Article>(`${this.apiUrl}/` + id)
}
}
