const Subpage = require('./Subpage');

module.exports = class ItGovernancePage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/service-categories/it-governance/', 'IT Governance - Olenick Service Pillars', 'IT Governance');
  }
};
