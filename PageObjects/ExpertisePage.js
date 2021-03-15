const Subpage = require('./Subpage');

module.exports = class ExpertisePage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/blog/', 'Olenick Insights and Experience - Explore Our Blog and More', 'Our Expertise');
  }
};
