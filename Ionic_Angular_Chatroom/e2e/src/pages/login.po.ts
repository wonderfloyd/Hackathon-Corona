import { browser, by, element } from 'protractor';
import { PageObjectBase } from '../app.pob';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/auth');
  }

  enterEmail(email: string) {
    this.enterInputText('#email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password-input', password);
  }

  submitLogin() {
    this.clickButton('#submit-login');
  }

  doLogin(email: string, password: string) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.submitLogin();
  }

  clickLinkToRegister() {
    this.clickButton('#register-link');
  }

  getLoginFailedMsg() {
    return this.getElement('#login-failed').getText();
  }
}
