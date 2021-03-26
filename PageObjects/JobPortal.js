const { until } = require('selenium-webdriver');
const Page = require('./Page');
const JobOpening = require('./JobOpening');

const PAGE_LOAD_TIMEOUT = 5000;
const FILTER_TIMEOUT = 5000;

module.exports = class JobPortal extends Page {
  constructor(webdriver) {
    super(webdriver, 'https://www.olenick.com/portal/#/jobs', 'Career Portal');
  }

  static convertToJobOpenings(webElements) {
    return webElements.map((e) => new JobOpening(e));
  }

  selectByLocation(city, state) {
    return this.driver.wait(until.elementLocated({ css: `section.filter-section:first-of-type .filter-item input[id='${city},${state}']` }), FILTER_TIMEOUT).click();
  }

  async waitForFullLoad() {
    await this.driver.wait(until.elementLocated({ css: 'label[for="2000003"]' }), PAGE_LOAD_TIMEOUT);
  }

  async jobOpenings() {
    return JobPortal.convertToJobOpenings(await this.driver.wait(until.elementsLocated({ className: 'card slide-up-item' }), FILTER_TIMEOUT));
  }

  async waitForLocationFilter(city, state) {
    const expectedLocation = `^\\s*${city}\\s*,\\s*${state}\\s*$`;
    const filterResult = await this.driver.wait(async (driver) => {
      let jobs = false;
      try {
        const openings = JobPortal.convertToJobOpenings(await driver.findElements({ className: 'card slide-up-item' }));
        const cardsAreLocal = await Promise.all(openings.map(async (o) => (await o.geographicLocation()).match(expectedLocation)));
        jobs = openings && openings.length && cardsAreLocal.every(Boolean) ? openings : false;
      } catch (error) {
        // do nothing
      }
      return jobs;
    }, FILTER_TIMEOUT);
    return filterResult;
  }

  async locationCounter(city, state) {
    return Number(await this.driver.wait(until.elementLocated({ css: `section.filter-section:first-of-type .filter-item label[for='${city},${state}'] + span` }), FILTER_TIMEOUT).getText());
  }
};
