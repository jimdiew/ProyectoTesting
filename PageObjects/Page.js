module.exports = class Page {
  constructor(driver, url, title) {
    this.driver = driver;
    this._url = url;
    this._title = title;
  }

  open() {
    return this.driver.get(this._url);
  }

  async isOpen() {
    const titlePromise = this.driver.getTitle();
    const urlPromise = this.driver.getCurrentUrl();

    return this._url === await urlPromise
       && this._title === await titlePromise;
  }
};
