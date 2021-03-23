const Page = require('./Page');

module.exports = class PresentationPage extends Page {
  constructor(driver, url, title, heroTitle) {
    super(driver, url, title);
    this._heroTitle = heroTitle;
  }

  // ERROR MESSAGE IF HERO TITLE IS NOT FOUND
  // eslint-disable-next-line class-methods-use-this
  get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }

  async isOpen() {
    const heroTitlePromise = this.heroTitle.getText();

    return super.isOpen() && this._heroTitle === await heroTitlePromise;
  }
};
