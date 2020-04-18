import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getAppRootText() {
    return element(by.css('app-root')).getText() as Promise<string>;
  }
}
