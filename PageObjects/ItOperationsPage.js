const Subpage = require('./Subpage');

module.exports = class ItOperationsPage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/service-categories/it-operations/', 'IT Operations - Olenick Service Pillars', 'IT Operations');
  }
};
