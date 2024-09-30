import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
