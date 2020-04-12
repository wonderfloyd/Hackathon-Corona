/**
 * Collect page load time profile tracing.
 * The following script will navigate to the website's home page,
 * and wirte a JSON file to ./tests/traces with a tracing profile recorded from Chrome DevTools.
 * The profile can be loaded and analyzed in the DevTools performance tab (if your IDE have DevTools, like VSCode, you can use it).
 * To see what can be done, visit the relevant issue: https://github.com/wonderfloyd/Hackathon-Corona/issues/40
 */

import puppeteer, { Browser, Page } from 'puppeteer';

(async () => {
  // launch puppeteer browser in headful mode
  const browser: Browser = await puppeteer.launch({
    headless: false
  });

  // instantiate a new puppeteer page
  const page: Page = await browser.newPage();
  
  // start the profile tracing
  await page.tracing.start({
    path: `./traces/loadTimeTrace-${new Date().getTime()}.json`,
    screenshots: true
  });

  // navigate to Home page
  await page.goto('http://localhost:3000');

  // wait for one second more after page loaded to get a full profile
  await page.waitFor(1000);

  // stop the tracing
  await page.tracing.stop();

  // close the browser instance
  await browser.close();
  console.log('finished tracing');
})();