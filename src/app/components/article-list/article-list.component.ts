import { Component, inject } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { Article } from '../../models/Article';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/ApiService/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {

  private apiService : ApiService = inject(ApiService)

  articles: Article[] = [];

ngOnInit() {
  this.apiService.getArticles().subscribe({
    next: (data) => {
      this.articles = data;
      console.log("Articles reçus :", this.articles);
    },
    error: (err) => {
      console.error("Erreur lors du chargement des articles :", err);
    }
  });
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
