import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/AuthService/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  title = 'Hélène';

  authService = inject(AuthService);
  router = inject(Router)

  isUserAdmin = false;
  isUserLogged = false;

  ngOnInit() {
    this.isUserAdmin = this.isAdmin();
    this.isUserLogged = this.isLogged()
  }

  isLogged() {
    if (!this.authService.isLoggedIn()) return false;
    return true;
  }

  isAdmin() : boolean {
    if (this.authService.getUserRole() !== "ROLE_ADMIN") return false;
    return true;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.clearToken();
    this.router.navigate(['/login']);  
    //window.location.reload();
  }

}
