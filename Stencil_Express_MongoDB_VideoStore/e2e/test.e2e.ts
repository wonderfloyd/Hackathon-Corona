import puppeteer, {Browser, Page} from 'puppeteer';

let browser: Browser, page: Page;

const baseUrl = `http://localhost:4001`;

const waitTime = 200;

describe('Example e2e test', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('navigate to home page', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('app-home');
  });

  test('title should read "Video Store"', async () => {
    const titleText  = await page.$eval('h1', h => h.textContent);
    expect(titleText).toEqual('Video Store');
  });

  test('Main Table Text', async () => {
    await wait('Main Table Text');
    const titleText  = await page.$eval('ul', h => h.textContent);
    expect(titleText).toEqual('Indiana JonesThe Matrix');
  });

  test('Navigate to Matrix Video Page', async () => {
    await wait('Navigate to Matrix Video Page');
    let videoId = '5e881f7051cda8a3dbb2241d';
    await page.click('[data-testid="videoLink-' + videoId + '"]');
    await page.waitForSelector('video-page');
  });

  test('"The Matrix" listing details', async () => {
    await wait('"The Matrix" listing details');
    const titleVal = await page.$eval('form', h => h.querySelector('input').value);
    console.log("titleVal: " + titleVal);
    expect(titleVal).toEqual('The Matrix');
  });
});

async function wait(name) {
  console.log((name ? name + ': ' : '') + 'Wait ' + waitTime + ' ms');
  await new Promise(function (resolve) {
    setTimeout(resolve, waitTime)
  });
}
