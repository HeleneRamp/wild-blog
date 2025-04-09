import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { authGuard } from './guards/auth/auth.guard';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { roleGuard } from './guards/role/role.guard';
import { visitorOnlyGuard } from './guards/visitor-only/visitor-only.guard';

export const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'article/:id', component: ArticlePageComponent},
    {path:'contact', component: ContactFormComponent},
    {path:'register', component: SignupFormComponent},
    {path: 'login', component: LoginFormComponent, canActivate: [visitorOnlyGuard]},
    {path: 'profile', component: ProfilePageComponent, canActivate: [authGuard]},
    {path: 'dashboard', component: DashboardPageComponent, canActivate: [roleGuard('ROLE_ADMIN')]},
    {path: '**', component: NotFoundComponent},
];
