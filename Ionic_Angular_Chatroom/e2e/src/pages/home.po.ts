import { browser, by, element, ElementFinder } from 'protractor';
import { PageObjectBase } from '../app.pob';

export class HomePage extends PageObjectBase {
  constructor() {
    super('app-home', '/home');
  }

  getUserWelcome() {
    return element(by.css('#user-welcome')).getText();
  }

  logout() {
    this.clickButton('#logout');
  }

  getAllMessages() {
    return this.getElement('.message-area').all(by.css('.message'));
  }

  getUserAvatar(message: ElementFinder) {
    return message.element(by.css('.user-avatar'));
  }

  enterMessage(msg: string) {
    this.enterInputText('#message-input', msg);
  }

  sendMessage() {
    this.clickButton('#send-message');
  }
}
