const puppeteer = require("puppeteer");
( async () => { 
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();
await page.setViewport({width: 1080, height: 1024});
await page.goto("https://www.calculator.net/");
await page.locator('td:nth-of-type(2) div:nth-of-type(1) > span:nth-of-type(2)').click({delay:1000});
await page.locator('td:nth-of-type(2) div:nth-of-type(1) > span:nth-of-type(3)').click({delay:1000});
await page.locator('td:nth-of-type(2) div:nth-of-type(1) > span:nth-of-type(4)').click({delay:1000});
await page.locator('td:nth-of-type(2) div:nth-of-type(3) > span:nth-of-type(3)').click({delay:1000});
await page.locator('td:nth-of-type(2) div:nth-of-type(3) > span:nth-of-type(2)').click({delay:1000});
await page.waitForSelector('#sciOutPut');
const result = await page.evaluate(() => {
    return document.querySelector('#sciOutPut').textContent;
});
// await page.screenshot({path: "calculator.png"});
console.log(`result:${result}`);
await browser.waitForTarget(()=> false,);
await browser.close()
}) ();
