const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const JobPortal = require('./PageObjects/JobPortal');

// Given Condition //
Given(/^I have visited the Olenick's job portal$/, { timeout: 30000 }, async function () {
  this.page = new JobPortal(this.driver);
  await this.page.open();
  await this.page.waitForFullLoad();
});

// When Condition //
When(/^I filter job openings by "(.*)", "(.*)" city location$/, async function (city, state) {
  await this.page.selectByLocation(city, state);
});

// Then Condition //
Then(/^the number of job openings should be the same as the counter for city "(.*)", "(.*)"$/, async function (city, state) {
  const jobOpeningsPromise = this.page.waitForLocationFilter(city, state);
  const cityCounterPromise = this.page.locationCounter(city, state);
  const [jobOpenings, cityCounter] = await Promise.allSettled([jobOpeningsPromise, cityCounterPromise]);
  assert.strictEqual([jobOpenings, cityCounter].find((p) => p.status !== 'fulfilled'), undefined);
  assert.strictEqual(jobOpenings.value.length, cityCounter.value);
});
