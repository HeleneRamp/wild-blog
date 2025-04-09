import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/AuthService/auth.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  providers: [AuthService]
})
export class LoginFormComponent {

  user = {
    email: "",
    password: "",
  };

  passwordVisible: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.router.navigate(['/']),
        error: () =>  alert("Email ou mot de passe incorrect")
      });
    }
  }

  togglePasswordVisibility() :void {
    this.passwordVisible = !this.passwordVisible;
  }

}
