const { setWorldConstructor } = require('cucumber')
const  seleniumWebdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
 
class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('firefox')
    .build();

  }
}
  
setWorldConstructor(CustomWorld)
 
module.exports = function() {
 
  this.World = CustomWorld;
 
  this.setDefaultTimeout(30 * 1000);
};