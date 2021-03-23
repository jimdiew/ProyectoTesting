// module.exports = function() {
const { After } = require('@cucumber/cucumber');

After(function () {
  return this.driver.quit();
});
