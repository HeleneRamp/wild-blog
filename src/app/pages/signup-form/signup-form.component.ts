import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  formBuilder : FormBuilder = inject(FormBuilder);
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  signupForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group({
    password: ['',[Validators.required, this.securePasswordValidator()]],
    confirmPassword: ['']
  }, 
    {
      validators: this.passwordMatchValidator()
    })
  });

  onSubmit() : void {
    if(this.signupForm.valid){
      alert("Formulaire d'inscription envoyé avec succès 🚀")
    } else {
      alert("Formulaire invalide, veuillez réessayer")
    }
  }
  securePasswordValidator() : ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value || '';

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 12;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

    return passwordValid ? null : {misSecurePassword: true};
  }
  }
  passwordMatchValidator() : ValidatorFn {
    return (formGroup : AbstractControl) : ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : {passwordMisMatch : true}
    }
  }

  togglePasswordVisibility() :void {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPasswordVisibility() :void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
}
