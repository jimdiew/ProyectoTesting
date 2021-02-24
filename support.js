const { setWorldConstructor } = require('cucumber')
const {Builder, Capabilities} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
 
class CustomWorld {
  constructor() {
    const caps = new Capabilities();
    caps.setPageLoadStrategy("eager");
    
    this.driver = new Builder().withCapabilities(caps)
    .forBrowser('firefox')
    .build();

  }
}
  
setWorldConstructor(CustomWorld)
 
module.exports = function() {
 
  this.World = CustomWorld;
 
  this.setDefaultTimeout(30 * 1000);
};