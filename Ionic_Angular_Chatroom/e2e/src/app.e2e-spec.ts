import { AppPage } from './app.po';

describe('Welcome title', () => {
  let app: AppPage;

  beforeEach(() => {
    app = new AppPage();
    app.dontWaitforAngular();
  });

  it('should read "FlowBiz Chatroom"', () => {
    app.navigateTo();
    app.waitUntilPageIsVisible();
    expect(app.getTitle()).toEqual('FlowBiz Chatroom');
  });
});
