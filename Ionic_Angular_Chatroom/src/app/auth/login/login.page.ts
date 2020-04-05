import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public email: string;
  public password: string;
  private loginFailed: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.email = '';
    this.password = '';
    this.loginFailed = false;
  }

  handleEmailInput(email: string): void {
    this.email = email;
  }

  handlePasswordInput(password: string): void {
    this.password = password;
  }

  handleSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.authService.login(user, this.loginSuccess, this.loginFailure);
  }

  loginSuccess = () => {
    console.log('Login Successful! Navigate to home');
    this.loginFailed = false;
    this.router.navigate(['/home']);
  }

  loginFailure = () => {
    this.loginFailed = true;
    throw new Error('Login Failed');
  }

}
