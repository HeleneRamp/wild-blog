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

toggleIsFavorite(){
  this.article.favorite = !this.article.favorite;
  this.popupVisible.emit();
  if (this.article.favorite) {
    this.notifyFavorite.emit(`Article "${this.article.title}" ajouté aux Favoris ❤️`);
  } else {
    this.notifyRemoveFavorite.emit(`Article "${this.article.title}" supprimé des Favoris 💔`);
  }
}
}
