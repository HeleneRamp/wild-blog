import { Component, Input } from '@angular/core';
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

togglePublication(article : Article): void{
  article.isPublished = !article.isPublished
}
} 
