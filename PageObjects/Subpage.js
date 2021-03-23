const PresentationPage = require('./PresentationPage');

module.exports = class Subpage extends PresentationPage {
  get heroTitle() { return this.driver.findElement({ css: '.fl-heading-text' }); }
};
