const Subpage = require('./Subpage');

module.exports = class AboutUsPage extends Subpage {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/about-us/', 'About Olenick: Over 20 Years of Experience in Software Testing and QA', 'About Olenick');
  }
};
