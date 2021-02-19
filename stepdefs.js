'use strict';

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
const {Builder} = webdriver;
const urlPrefix = "https://www.olenick.com";

//Given condition//
Given(/^I have visited the Olenick home page$/, {timeout:30000}, async function () {
   await this.driver.get (urlPrefix);     
 });

//When condition//      
When(/^I click the "(.*)" header link$/, {timeout:10000}, async function (linkText) {
await this.driver.findElement({ id: 'menu-main-menu' }).findElement({ linkText: 'IT Projects' }).click();
});

 // Then condition // 
Then(/^the page titled "(.*)" with url "(.*)" should open in the same window$/, {timeout:10000}, async function (title, url) {
   const titlePromise = this.driver.getTitle();
   const urlPromise =  this.driver.getCurrentUrl();
   assert.strictEqual(await titlePromise, title);
   assert.strictEqual(await urlPromise, urlPrefix + url);
  });
  