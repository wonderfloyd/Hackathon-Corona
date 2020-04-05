// import { browser, by, element } from 'protractor';
import { PageObjectBase } from './app.pob';

export class AppPage extends PageObjectBase {
  constructor() {
    super('app-root', '/');
  }

  // checkTestability() {
  //   const script = 'const testable = window.getAllAngularTestabilities()[0]; \n' + 'console.log(testable);';
  //   browser.executeAsyncScript('console.log("***** hello tests *****")');
  //   // browser.sleep(2500);
  //   browser.executeAsyncScript(script);
  // }
}
