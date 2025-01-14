const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://fill.dev/form/credit-card-simple');

  let selector = "input[id='cc-name']";
  await page.waitForSelector(selector);
  await page.type(selector, 'Peepee Poopoo');

  selector = "select[id='cc-type']";
  await page.select(selector, 'visa');

  selector = "input[id='cc-number']";
  await page.type(selector, '0123 4567 8900 1212');

  selector = "input[id='cc-csc']";
  await page.type(selector, '123');

  selector = "select[id='cc-exp-month']";
  await page.type(selector, '01');

  selector = "select[id='cc-exp-year']";
  await page.type(selector, '2028');

  selector = "button[type='submit']";
  await page.click(selector);
}

run();
