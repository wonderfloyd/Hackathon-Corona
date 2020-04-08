import puppeteer, { Browser, Page } from 'puppeteer';

let browser: Browser, page: Page;

const baseUrl = `http://localhost:4001`;

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

  test('should click "The Matrix" listing and navigate to video page', async () => {
    await page.click('[data-testid="videoLink-5e8d6e11d250a3ecb93fef6e"]');
    await page.waitForSelector('video-page');
  });

  test('should get "The Matrix" listing details', async () => {
    const titleVal = await page.$eval('form', h => h.querySelector('input').value);
    expect(titleVal).toEqual('The Matrix');
  });
});