import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  private email: string;
  private password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  onEmailInput(text: string) {
    this.email = text;
  }

  onPasswordInput(text: string) {
    this.password = text;
  }

  registerNewUser(): void {
    this.authService.register(this.email, this.password)
      .then(res => {
        console.log('Registeration success: ', this.email, 'navigating to Home page');
        this.router.navigate(['/home']);
      })
      .catch(err => alert(err + ' Please try again'));
  }

}
