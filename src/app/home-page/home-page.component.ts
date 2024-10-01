import { Component } from '@angular/core';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Hélène 😸';
}
