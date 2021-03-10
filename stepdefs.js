'use strict';

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
const {Builder} = webdriver;
const urlPrefix = "https://www.olenick.com";

import HomePage from './PageObjects/HomePage';
import ItProjectsPage from './PageObjects/ItProjectsPage';
import ItOperationsPage from './PageObjects/ItOperationsPage';

// Dictionary //
const pageDict = {
   'IT Projects': ItProjectsPage,
   'IT Operations': ItOperationsPage,
   'IT Governance': ItGovernancePage,
   'News': NewsPage,
   'Expertise': ExpertisePage,
   'About': AboutUsPage
 } ;


// Given condition //
Given(/^I have visited the Olenick home page$/, {timeout:30000}, async function () {
   const page = new HomePage (this.driver);
   await this.driver.get (urlPrefix);     
 });

//When condition//      
When(/^I click the "(.*)" header link$/, async function (linkText) {
await this.driver.findElement({ id: 'menu-main-menu' }).findElement({ linkText }).click();
});

 // Then condition // 
Then(/^the page titled "(.*)" with url "(.*)" should open in the same window$/, async function (title, url) {
   const titlePromise = this.driver.getTitle();
   const urlPromise =  this.driver.getCurrentUrl();
   assert.strictEqual(await titlePromise, title);
   assert.strictEqual(await urlPromise, urlPrefix + url);
  });

// New Then condition // 
Then(/^page "(.*)" should open in the same window$/, async function(pageName) {
   const pageClass =  pageDict[pageName]; 
   const page = new pageClass (this.driver);
}  )
