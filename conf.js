exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  allScriptsTimeout: 10000,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],
  cucumberOpts: {
    require: ['steps/*steps.js'],
    tags: [],
    strict: true,
    'dry-run': false,
    compiler: [],
  },

  onPrepare: async () => {
    const { Given, Then, When, Before } = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
    await browser.waitForAngularEnabled(false);
  }
};