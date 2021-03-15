const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const HomePage = require('./PageObjects/HomePage');
const ItProjectsPage = require('./PageObjects/ItProjectsPage');
const ItOperationsPage = require('./PageObjects/ItOperationsPage');
const ItGovernancePage = require('./PageObjects/ItGovernancePage');
const NewsPage = require('./PageObjects/NewsPage');
const ExpertisePage = require('./PageObjects/ExpertisePage');
const AboutUsPage = require('./PageObjects/AboutUsPage');

// Dictionary //
const PAGE_DICT = {
  'IT Projects': ItProjectsPage,
  'IT Operations': ItOperationsPage,
  'IT Governance': ItGovernancePage,
  'News': NewsPage,
  'Expertise': ExpertisePage,
  'About': AboutUsPage,
};

// Given condition //
Given(/^I have visited the Olenick home page$/, { timeout: 30000 }, async function () {
  this.page = new HomePage(this.driver);
  await this.page.open();
});

// When condition//
When(/^I click the "(.*)" header link$/, async function (linkText) {
  await this.page.clickHeaderLink(linkText);
});

// Then condition //
Then(/^page "(.*)" should open in the same window$/, async function (pageName) {
  const PageClass = PAGE_DICT[pageName];
  const page = new PageClass(this.driver);
  assert.ok(await page.isOpen());
});
