import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../models/Article'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
@Input() article! : Article
@Output() notifyFavorite: EventEmitter<string> = new EventEmitter<string>();
@Output() notifyRemoveFavorite: EventEmitter<string> = new EventEmitter<string>();
@Output() popupVisible = new EventEmitter<void>()

togglePublication(article : Article): void{
  article.isPublished = !article.isPublished
}

toggleIsFavorite(){
  this.article.isFavorite = !this.article.isFavorite;
  this.popupVisible.emit();
  if (this.article.isFavorite) {
    this.notifyFavorite.emit(`L'article  → "${this.article.title}" vient d'être liké ❤️`);
  } else {
    this.notifyRemoveFavorite.emit(`Vous avez annuler votre like de l'article  → "${this.article.title}" 💔`);
  }
}
}
