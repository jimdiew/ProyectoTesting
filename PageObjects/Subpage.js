const Page = require('./Page');

module.exports = class Subpage extends Page {
  get heroTitle() { return this.driver.findElement({ css: '.fl-heading-text' }); }
};
