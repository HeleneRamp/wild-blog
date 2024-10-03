import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'article/:id', component: ArticlePageComponent},
    {path:'contact', component: ContactFormComponent},
    {path:'signup-form', component: SignupFormComponent},
    {path: '**', component: NotFoundComponent},
];
