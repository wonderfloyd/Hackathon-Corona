import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  protected path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  dontWaitforAngular() {
    /**
     * needed because angular never stablizes, due to async macro-tasks, possibly because of Firebase
     * see:
     * 1. https://stackoverflow.com/questions/55283507/selenium-determine-whether-web-page-is-finished-loading-in-angular-2
     * 2. https://stackoverflow.com/questions/48627074/how-to-track-which-async-tasks-protractor-is-waiting-on
     */
    browser.waitForAngularEnabled(false);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  getElement(sel: string) {
    return element(by.css(`${this.tag} ${sel}`));
  }

  waitForAlert() {
    return browser.wait(ExpectedConditions.alertIsPresent(), 2000);
  }

  getAlertText() {
    return browser.switchTo().alert().getText();
  }

  acceptAlert() {
    return browser.switchTo().alert().accept();
  }

  navigateTo() {
    return browser.get(`${this.path}`);
  }

  getTitle() {
    browser.driver.getTitle();
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }

  waitUntilPageIsVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  waitUntilElementIsVisible(sel: string) {
    browser.wait(ExpectedConditions.visibilityOf(this.getElement(sel)), 3000);
  }

}
