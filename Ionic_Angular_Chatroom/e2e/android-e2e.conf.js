// Protractor configuration file for android tests 
//
// see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  suites: {
    app: './src/app.e2e-spec.ts',
    login: './src/specs/login.e2e-spec.ts',
    chat: './src/specs/chat.e2e-spec.ts'
  },
  seleniumAddress: 'http://localhost:4723/wd/hub',
  multiCapabilities: [
    {
      browserName: '',                        // Leave as blank to run on Appium
      appPackage: 'io.FlowBiz.IonicAngularChatSkeleton',         // Name of the package
      appActivity: '.MainActivity',           // MainActivity is the activity to launch
      platformName: 'Android',
      deviceName: 'emulator-5554',
      autoAcceptAlerts: 'true',
      autoWebview: true,                      // Sets to Webview to allow testing
      autoWebviewTimeout: 20000,
      // app: {path/to/apk/file/from/android/studio}
      automationName: 'UiAutomator2'
    }
  ],
  // baseUrl: '',
  SELENIUM_PROMISE_MANAGER: false,
  // useAllAngular2AppRoots: true,
  random: false,
  framework: 'jasmine',
  jasmineNodeOpts: {
    random: false,
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  onComplete() {
    console.log('onComplete is running')
    // const capsPromise = browser.getCapabilities();
    // capsPromise.then(res => console.log('browser caps resolved promise: ', res));
  },
  onCleanUp(exitCode) {
    console.log('clean up is running: ', exitCode);
  }
};
