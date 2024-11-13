import { Component, inject } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../models/Article';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {

  private apiUrl = 'http://localhost:3000/articles';

  private http = inject(HttpClient);

  articles$!: Observable<Article[]>;

  ngOnInit() {
    this.articles$ = this.http.get<Article[]>(this.apiUrl)
  }

  messageAddFavorite: string = '';
  messageRemoveFavorite: string = '';
  isPopupVisible: boolean = false;

  handleAddFavorite(message: string) {
    this.messageAddFavorite = message;
    this.messageRemoveFavorite = message;
    this.isPopupVisible = true;

    setTimeout(() => {
      this.isPopupVisible = false;
    }, 3000);
  }

  handleFavoriteRemoved(message: string) {
    this.messageRemoveFavorite = message;
    this.isPopupVisible = true;
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 5000);
  }
}
