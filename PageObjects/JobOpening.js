module.exports = class JobOpening {
  constructor(webElement) {
    this.webElement = webElement;
  }

  geographicLocation() {
    return this.webElement.findElement({ className: 'card-location' }).getText();
  }
};
