import { PageObjectBase } from '../app.pob';

export class RegisterPage extends PageObjectBase {
  constructor() {
    super('app-register', '/auth/register');
  }

  goBackToLogin() {
    this.clickButton('#back-to-login');
  }

  enterEmail(email: string) {
    this.enterInputText('#register-email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#register-password-input', password);
  }

  clickRegister() {
    this.clickButton('#register-button');
  }
}
