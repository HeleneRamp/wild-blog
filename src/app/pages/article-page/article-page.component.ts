import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Article } from '../../models/Article';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ApiService } from '../../services/ApiService/api.service';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
})
export class ArticlePageComponent {

  article$!: Observable<Article>
  articleId!: number;
  private apiService: ApiService = inject(ApiService)

  private route: ActivatedRoute = inject(ActivatedRoute)
  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef)

  
  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => {
        this.articleId = Number(params.get('id'));
        this.changeDetector.detectChanges();
        return this.apiService.getArticleById(this.articleId)
      })
    )
    }
    
}
