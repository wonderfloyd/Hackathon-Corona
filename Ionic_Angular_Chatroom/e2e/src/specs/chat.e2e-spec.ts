import { HomePage } from '../pages/home.po';

describe('Chat functionality', () => {
  const home = new HomePage();

  const msg = `test msg from ${new Date().toLocaleString()}`;

  it('should recieve an array of messages', () => {
    home.waitUntilElementIsVisible('.message');
    home.getAllMessages().each((message, i) => {
      expect(message.isPresent()).toEqual(true);
    });
  });

  it('should display incoming messages with user avatar', () => {
    home.getAllMessages().each(message => {
      message.getAttribute('class').then(attr => {
        if (attr.includes('incoming')) {
          expect(home.getUserAvatar(message).isPresent()).toEqual(true);
        }
      });
    });
  });

  it('should open an alert when sending an empty message', () => {
    home.sendMessage();
    home.waitForAlert();
    expect(home.getAlertText()).toEqual('Can\'t send empty messages');
    home.acceptAlert();
  });

  it('should send and display new message', () => {
    home.enterMessage(msg);
    home.sendMessage();
    expect(home.getAllMessages().last().getText()).toEqual(msg);
  });
});


/** TODOs
 *
 * 1. add tests for content (e.g user avatar and messages).
 * 2. add clean up for test messages sent
 *
 */
