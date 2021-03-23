const PresentationPage = require('./PresentationPage');

module.exports = class HomePage extends PresentationPage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/', 'Olenick: Global Leaders in Software Testing and Quality Engineering', 'Global Leaders in Software Quality Engineering');
  }

  get heroTitle() { return this.driver.findElement({ css: '.bold1' }); }

  clickHeaderLink(linkText) {
    return this.driver.findElement({ id: 'menu-main-menu' }).findElement({ linkText }).click();
  }
};
