import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Article } from '../../models/Article';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {
  private apiUrl = 'http://localhost:3000/articles';

  private http: HttpClient = inject(HttpClient)
  private route: ActivatedRoute = inject(ActivatedRoute)
  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef)

  article$!: Observable<Article>
  articleId!: number;
  
  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
        this.articleId = Number(params.get('id'));
        this.changeDetector.detectChanges();
        return this.getArticleById(this.articleId)
      })
    )
    }
    
    getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`)
  }
}
