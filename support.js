const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder, Capabilities } = require('selenium-webdriver');
require('geckodriver');

class CustomWorld {
  constructor() {
    const caps = new Capabilities();
    caps.setPageLoadStrategy('eager');

    this.driver = new Builder().withCapabilities(caps)
      .forBrowser('firefox')
      .build();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(10 * 1000);

module.exports = function () {
  this.World = CustomWorld;
};
