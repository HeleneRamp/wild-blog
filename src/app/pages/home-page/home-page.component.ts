import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component'; 
import { RouterLink } from '@angular/router';
import { Article } from '../../models/Article';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleCardComponent , RouterLink, FormsModule, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

  messageAddFavorite: string = '';
  messageRemoveFavorite: string = ''
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


  title = 'Hélène 😸';
  articles: Article[] = [
    { id: 1,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      isFavorite: false,
      comment: '', 
    },
    { 
      id: 2,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      isFavorite: false, 
      comment: '', 
    },
    { 
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      isFavorite: false,
      comment: '', 
    }
  ]

}
