const fs = require('fs').promises;
const { After, Status } = require('@cucumber/cucumber');

After(async function (scenario) {
  try {
    if (scenario && scenario.result && scenario.result.status === Status.FAILED) {
      const image = await this.driver.takeScreenshot();
      const featureName = scenario.gherkinDocument.feature.name.replace(/ /g, '_');
      const scenarioName = scenario.pickle.name.replace(/ /g, '_');
      await fs.writeFile(`./test/report/${featureName}-${scenarioName}.png`, image, 'base64');
    }
  } finally {
    await this.driver.quit();
  }
});
