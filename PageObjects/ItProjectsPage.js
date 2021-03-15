const Subpage = require('./Subpage');

module.exports = class ItProjectsPage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/service-categories/it-projects/', 'IT Projects - Olenick Service Pillars', 'IT Projects');
  }
};
