//Selenium test
require('geckodriver');
const webdriver = require('selenium-webdriver');
const {Builder, By, Key, until} = webdriver;


const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.olenick.com/');
    await driver.findElement(By.className("menu-item")).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - IT Projects'), 1000);
  } finally {
    await driver.quit();
  }
})();