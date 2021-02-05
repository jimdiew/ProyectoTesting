//Builder API
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//Selenium test
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.olenick.com/');
    await driver.findElement(By.id('#menu-item-5398')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - IT Projects'), 1000);
  } finally {
    await driver.quit();
  }
})();