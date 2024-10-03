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
monMessage : string = 'Salut enfant !'

  title = 'Hélène 😸';
  articles: Article[] = [
    { id: 1,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
    },
    { 
      id: 2,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
    },
    { 
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      isPublished: true, 
      comment: '', 
    }
  ]

  
    togglePublication(article : Article): void{
      article.isPublished = !article.isPublished
    }
}
