'use strict';

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { Given, When, Then, And } = require('cucumber');
const {Builder} = webdriver;
const urlPrefix = "https://www.olenick.com";

//Given condition//
Given(/^I have visited the Olenick home page$/, {timeout:30000}, async function () {
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

  //Second Then condition//
  Then(/^hero title is "(.*)"$/, async function (heroTitle){
   const heroTitlePromise = this.driver.findElement({ className: 'fl-heading-text' }).getText();
   assert.strictEqual(await heroTitlePromise, heroTitle );
  });