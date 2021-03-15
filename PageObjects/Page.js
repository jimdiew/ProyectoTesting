module.exports = class Page {
  constructor(driver, url, title, heroTitle) {
    this.driver = driver;
    this._url = url;
    this._heroTitle = heroTitle;
    this._title = title;
  }

  // ERROR MESSAGE IF HERO TITLE IS NOT FOUND
  // eslint-disable-next-line class-methods-use-this
  get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }

  open() {
    return this.driver.get(this._url);
  }

  async isOpen() {
    const titlePromise = this.driver.getTitle();
    const urlPromise = this.driver.getCurrentUrl();
    const heroTitlePromise = this.heroTitle.getText();

    return this._url === await urlPromise
       && this._heroTitle === await heroTitlePromise
       && this._title === await titlePromise;
  }
};
