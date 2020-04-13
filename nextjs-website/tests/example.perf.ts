/**
 * Collect some performance metrics.
 * The scripts in this file collect and log to the console some metrics
 * of the website's loading time.
 * The first one uses puppeteer's API to get the total size of JS used by the site.
 * The second uses puppeteer's API to get the page's loading time
 * from the browser performance API.
 * To see what can be done, visit the relevant issue: https://github.com/wonderfloyd/Hackathon-Corona/issues/40
 */

import puppeteer, { Browser, Page } from 'puppeteer';

const PORT = '3003'; // change to port 3004 to test prod build

(async () => {
  // launch puppeteer browser
  const browser: Browser = await puppeteer.launch();

  // instantiate a new puppeteer page
  const page: Page = await browser.newPage();

  // navigate to Home page and wait for it to render
  await page.goto(`http://localhost:${PORT}`); 
  await page.waitForSelector('title');
  
  // collect and log metrics from puppeteer's Page.metrics
  const results = await page.metrics();
  console.info(results);
  console.log('JSHeapUsedSize: ', results.JSHeapUsedSize);
  
  // close the browser instance
  await browser.close();
})();

(async () => {
  // launch puppeteer browser
  const browser: Browser = await puppeteer.launch();

  // instantiate a new puppeteer page
  const page: Page = await browser.newPage();

  // navigate to Home page and wait for it to render
  await page.goto(`http://localhost:${PORT}`);
  await page.waitForSelector('title');

  // collect metrics from the browser API using puppeteer's Page.evaluate
  const res = await page.evaluate(() => JSON.stringify(window.performance))
  const result = JSON.parse(res);

  // log the result
  console.info(result);

  // get and log loading time from result
  const loadingTime = result.timing.loadEventEnd - result.timing.navigationStart;
  console.log(`page loading time is ${loadingTime}ms`);

  // close the browser instance
  await browser.close();
})();