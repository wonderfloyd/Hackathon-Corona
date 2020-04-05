import { LoginPage } from '../pages/login.po';
import { RegisterPage } from '../pages/register.po';
import { HomePage } from '../pages/home.po';

// import { UserService} from '../../../src/app/services/user/user.service';

describe('Login Page', () => {
  const login = new LoginPage();
  const register = new RegisterPage();
  const home = new HomePage();

  it('title should read "Login"', () => {
    login.waitUntilPageIsVisible();
    expect(login.getTitle()).toEqual('Login');
  });

  describe('Unlogged in user', () => {
    it('should display "Login Failed!" error when logging in with wrong credentials', () => {
      login.doLogin('john@mail.com', 'wrongpass');
      login.waitUntilElementIsVisible('#login-failed');
      expect(login.getLoginFailedMsg()).toEqual('Login Failed!');
    });

    it('should accept alert and redirect to login when navigating to Home page', () => {
      home.navigateTo();
      home.waitForAlert();
      expect(home.getAlertText()).toEqual('Please login');
      home.acceptAlert();
      expect(login.getTitle()).toEqual('Login');
    });
  });

  describe('Logging in and out', () => {
    it('should display user welcome when logging in', () => {
      login.waitUntilPageIsVisible();
      login.doLogin('john@mail.com', 'asdfgh');
      home.waitUntilPageIsVisible();
      expect(home.getUserWelcome()).toEqual('Hello john!');
    });

    it('title should read "Welcome Home Page"', () => {
      expect(home.getTitle()).toEqual('Welcome Home Page');
    });

    it('should redirect to Home page when navigating back to login', () => {
      login.navigateTo();
      home.waitUntilPageIsVisible();
      expect(home.getTitle()).toEqual('Welcome Home Page');
      expect(home.getUserWelcome()).toEqual('Hello john!');
    });

    it('should redirect to Home page when navigating to Register page', () => {
      register.navigateTo();
      home.waitUntilPageIsVisible();
      expect(home.getTitle()).toEqual('Welcome Home Page');
      expect(home.getUserWelcome()).toEqual('Hello john!');
    });

    it('should log user out and navigate to Login page', () => {
      home.logout();
      login.waitUntilPageIsVisible();
      expect(login.getTitle()).toEqual('Login');
    });
  });

  describe('Register new user', () => {

    const testUser = `test${new Date().getTime()}`;
    const password = 'secret';

    // const userService: UserService = new UserService();

    // afterAll(action => {
    //   console.log('afterAll() is running');
    //   userService.getUser().then(res => {
    //     console.log('user: ', res);
    //   })
    //   .catch(err => console.log(err));
    // });

    it('should navigate to Register page when clicking "Sign Up" button', () => {
      login.clickLinkToRegister();
      register.waitUntilPageIsVisible();
    });

    it('should navigate back to Login page', () => {
      register.goBackToLogin();
      login.waitUntilPageIsVisible();
      expect(login.getTitle()).toEqual('Login');
    });

    it('Register title should read "Register"', () => {
      register.navigateTo();
      register.waitUntilPageIsVisible();
      expect(register.getTitle()).toEqual('Register');
    });

    it('should register new user and navigate to Home page', () => {
      register.enterEmail(`${testUser}@mail.com`);
      register.enterPassword(password);
      register.clickRegister();
      home.waitUntilPageIsVisible();
      expect(home.getUserWelcome()).toEqual(`Hello ${testUser}!`);
      home.logout();
      login.doLogin('john@mail.com', 'asdfgh');
    });
  });
});

/**
 * TODOs
 *
 * 1. refactor to operations and expectations
 * 2. fix multiple elements warning
 * 3.
 * 4.
 * 5. add clean up for test users registered
 * 6. add tests for form validation (login and register)
 *
 */
