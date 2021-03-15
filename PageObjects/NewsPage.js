const Subpage = require('./Subpage');

module.exports = class NewsPage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/news/', 'Company News and Announcements - Olenick', 'News');
  }
};
